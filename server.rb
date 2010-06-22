require 'redis'

before do
  @redis = Redis.new
end

# Create User
post '/users' do
  user_id = @redis.incr(:user_counter)
  @redis["user-#{user_id}"] = Marshal.dump({
    :id => user_id,
    :username => params[:username],
    :password => params[:password]
  })

  @redis["user-#{params[:username]}"] = user_id
  @redis.sadd("all-users",user_id)

  Marshal.load(@redis["user-#{user_id}"]).to_json
end

# Update user 
put '/users' do
end

# Destroy user
delete '/users' do
end

## Login Actions ##

# Login
post '/session' do
  user_id = @redis["user-#{params[:username]}"]
  unless( user_id.nil? )
    user = Marshal.load(@redis["user-#{user_id}"])
    halt 500, 'No hacking allowed' unless(user[:password] == params[:password])
  else
    halt 500, 'Nice Try'
  end
end



describe 'users'
  before
    user = new storm.model.User( json_fixture('user') )
  end

  after
    // ...
  end

  it 'should have an id'
    user.id().should.equal 1
  end

  it 'should have a username'
    user.username().should.equal 'Bruce Lee'
  end

  it 'should NOT have a password'
    -{ user.password() }.should.throw_error
  end

  it 'should be respond to registered()'
    storm.model.User.should.respond_to 'register'
  end

  it 'should be able to register users successfully'
    mock_request().and_return( '{ id: 100, username: "Bob" }' )
    result = storm.model.User.register( 'Bob', 123, 123 )
    
    result.username.should.be 'Bob'
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ storm.model.User.register( 'Bob', 123, 123 ) }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

  it 'should be respond to save()'
    user.should.respond_to 'save'
  end

  it 'should be able to be updated users successfully'
    mock_request().and_return( '{ id: 1, username: "Jason Lee" }' )
    user.username( 'Jason Lee' )

    user.save()
    user.username().should.equal( 'Jason Lee' )
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ user.save() }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

  it 'should be respond to login()'
    storm.model.User.should.respond_to 'login'
  end

  it 'should be able to login successfully'
    mock_request().and_return('true', 'text/plain', 200 )
    storm.model.User.login( { username: 'Foo', password: 'bar'  } ).should.be_true
  end

  it 'should be able to login with errors'
    mock_request().and_return('false', 'text/plain', 500 )
    storm.model.User.login( { username: 'Foo', password: 'bar'  } ).should.be_false
  end
end

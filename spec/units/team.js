describe 'teams'
  before
    team = new storm.model.Team( json_fixture('team') )
    user = new storm.model.User( json_fixture('user') )
  end

  after
    // ...
  end

  it 'should have an id'
    team.id().should.equal 1
  end

  it 'should have a alias'
    team.alias().should.equal 'The Geeks'
  end

  it 'should NOT have a password'
    -{ team.password() }.should.throw_error
  end

  it 'should be respond to registered()'
    storm.model.Team.should.respond_to 'register'
  end

  it 'should be able to register teams successfully'
    mock_request().and_return( '{ id: 100, alias: "Blackjacks", color: "white" }' )
    result = storm.model.Team.register( 'Blackjacks', 'white', 123, 123 )
    
    result.alias().should.be 'Blackjacks'
    result.color().should.be 'white'
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ storm.model.Team.register( 'Bob', 123, 123 ) }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

  it 'should be respond to save()'
    team.should.respond_to 'save'
  end

  it 'should be able to be updated team successfully'
    mock_request().and_return( '{ id: 1, alias: "Jason Lee" }' )
    team.alias( 'Jason Lee' )

    team.save()
    team.alias().should.equal( 'Jason Lee' )
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ team.save() }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

  it 'should respond to join()'
    team.should.respond_to 'join'
  end

  it 'should be able to register a user successfully'
    mockRequest().and_return('true', 'text/plain')
    team.join( user, 'foobar' ).should.be_true
  end

  it 'should be able to register a user and fail'
    mockRequest().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500)
    team.join( user, 'foobar' ).should.be_false
  end

  it 'should respond to reject()'
    team.should.respond_to 'reject'
  end

  it 'should be able to reject a user successfully'
    mockRequest().and_return('true', 'text/plain')
    team.reject( user, 'foobar' ).should.be_true
  end

  it 'should be able to reject a user and fail'
    mockRequest().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500)
    team.reject( user, 'foobar' ).should.be_false
  end
end

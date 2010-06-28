describe 'teams'
  before
    team = new storm.model.Team( json_fixture('team') )
  end

  after
    // ...
  end

  it 'should have an id'
    team.id().should.equal 1
  end

  it 'should have a name'
    team.name.should.equal 'The Geeks'
  end

  it 'should NOT have a password'
    -{ team.password() }.should.throw_error
  end

  it 'should be respond to registered()'
    storm.model.Team.should.respond_to 'register'
  end

  it 'should be able to register teams successfully'
    mock_request().and_return( '{ id: 100, name: "Blackjacks", color: "white" }' )
    result = storm.model.Team.register( 'Blackjacks', 'white', 123, 123 )
    
    result.name.should.be 'Blackjacks'
    result.color.should.be 'white'
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ storm.model.Team.register( 'Bob', 123, 123 ) }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

  it 'should be respond to save()'
    team.should.respond_to 'save'
  end

  it 'should be able to be updated users successfully'
    mock_request().and_return( '{ id: 1, name: "Jason Lee" }' )
    team.name = 'Jason Lee'

    team.save()
    team.name.should.equal( 'Jason Lee' )
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ team.save() }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

end

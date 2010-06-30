describe 'servers'
  before
    server = new storm.model.Server( json_fixture('server') )
  end

  after
    // ...
  end

  it 'should have an id'
    server.id().should.equal 1
  end

  it 'should have a alias'
    server.alias().should.equal 'Blackbird'
  end

  it 'should be respond to register()'
    storm.model.Server.should.respond_to 'register'
  end

  it 'should be able to register servers successfully'
    mock_request().and_return( '{ id: 100, alias: "Chainsaw", address: "192.168.100.1" }' )
    result = storm.model.Server.register( 'Chainsaw', "192.168.100.1" )
    
    result.alias().should.be 'Chainsaw'
    result.address().should.be "192.168.100.1"
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ storm.model.Server.register( 'Bob', 123 ) }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

  it 'should be respond to save()'
    server.should.respond_to 'save'
  end

  it 'should be able to be updated server successfully'
    mock_request().and_return( '{ id: 1, alias: "Jason Lee" }' )
    server.alias( 'Jason Lee' )

    server.save()
    server.alias().should.equal( 'Jason Lee' )
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ server.save() }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

end

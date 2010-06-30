describe 'services'
  before
    service = new storm.model.Service( json_fixture('service') )
  end

  after
    // ...
  end

  it 'should have an id'
    service.id().should.equal 1
  end

  it 'should have a alias'
    service.alias().should.equal 'Redis'
  end

  it 'should be respond to register()'
    storm.model.Service.should.respond_to 'register'
  end

  it 'should be able to register services successfully'
    mock_request().and_return( '{ id: 100, alias: "Blackjacks", port: 199, server_id: 300 }' )
    result = storm.model.Service.register( 'Blackjacks', 199, 300 )
    
    result.alias().should.be 'Blackjacks'
    result.port().should.be 199
    result.server_id().should.be 300
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ storm.model.Service.register( 'Bob', 123, 123 ) }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

  it 'should be respond to save()'
    service.should.respond_to 'save'
  end

  it 'should be able to be updated service successfully'
    mock_request().and_return( '{ id: 1, alias: "Jason Lee" }' )
    service.alias( 'Jason Lee' )

    service.save()
    service.alias().should.equal( 'Jason Lee' )
  end

  it 'should be able to recieve an alert when there is an error during registeration'
    mock_request().and_return('{ errors: [ { error: "foo" } ] }', 'text/plain', 500 )
    -{ service.save() }.should.throw_error '{ errors: [ { error: "foo" } ] }'
  end

end

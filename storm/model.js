include('../storm.js');

storm.model = {};

storm.model.create_resource = function( options ){
  storm.model.resource(
    options.url,
    options.payload,
    "POST",
    options.success_callback,
    options.error_callback
  );
};

storm.model.update_resource = function( options ){
  storm.model.resource(
    options.url,
    options.payload,
    "PUT",
    options.success_callback,
    options.error_callback
  );
};

storm.model.destroy_resource = function( options ){
  storm.model.resource(
    options.url,
    options.payload,
    "DELETE",
    options.success_callback,
    options.error_callback
  );
};

storm.model.get_resource = function( options ){
  storm.model.resource(
    options.url,
    options.payload,
    "GET",
    options.success_callback,
    options.error_callback
  );
};

storm.model.resource = function( url, payload, requestType, success_callback, error_callback ){
  // we want a response from this method
  uki.ajaxSetup({ async:false });

  if( error_callback == null ){
    error_callback = function( response ){
      try{
        var json = eval('(' + response.responseText + ')');
        throw( json );
      }catch( e ){
        throw( response.responseText );
      }
    }
  }

  uki.ajax({
    type: requestType,
    url: url,
    data: payload,
    success: success_callback,
    error: error_callback
  });

  uki.ajaxSetup({ async:true });
};

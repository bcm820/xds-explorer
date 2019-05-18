/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var envoy_api_v2_core_grpc_service_pb = require('./envoy/api/v2/core/grpc_service_pb.js');
goog.object.extend(proto, envoy_api_v2_core_grpc_service_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.config.ratelimit.v2.RateLimitServiceConfig', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.ratelimit.v2.RateLimitServiceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.displayName = 'proto.envoy.config.ratelimit.v2.RateLimitServiceConfig';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.ratelimit.v2.RateLimitServiceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    grpcService: (f = msg.getGrpcService()) && envoy_api_v2_core_grpc_service_pb.GrpcService.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.config.ratelimit.v2.RateLimitServiceConfig}
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.ratelimit.v2.RateLimitServiceConfig;
  return proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.ratelimit.v2.RateLimitServiceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.ratelimit.v2.RateLimitServiceConfig}
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new envoy_api_v2_core_grpc_service_pb.GrpcService;
      reader.readMessage(value,envoy_api_v2_core_grpc_service_pb.GrpcService.deserializeBinaryFromReader);
      msg.setGrpcService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.ratelimit.v2.RateLimitServiceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrpcService();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_api_v2_core_grpc_service_pb.GrpcService.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.api.v2.core.GrpcService grpc_service = 2;
 * @return {?proto.envoy.api.v2.core.GrpcService}
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.prototype.getGrpcService = function() {
  return /** @type{?proto.envoy.api.v2.core.GrpcService} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_grpc_service_pb.GrpcService, 2));
};


/** @param {?proto.envoy.api.v2.core.GrpcService|undefined} value */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.prototype.setGrpcService = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.prototype.clearGrpcService = function() {
  this.setGrpcService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.ratelimit.v2.RateLimitServiceConfig.prototype.hasGrpcService = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.envoy.config.ratelimit.v2);
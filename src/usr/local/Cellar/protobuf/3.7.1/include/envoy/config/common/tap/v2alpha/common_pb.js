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

var envoy_service_tap_v2alpha_common_pb = require('./envoy/service/tap/v2alpha/common_pb.js');
goog.object.extend(proto, envoy_service_tap_v2alpha_common_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.config.common.tap.v2alpha.AdminConfig', null, global);
goog.exportSymbol('proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig', null, global);
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
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.oneofGroups_);
};
goog.inherits(proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.displayName = 'proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig';
}
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
proto.envoy.config.common.tap.v2alpha.AdminConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.common.tap.v2alpha.AdminConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.common.tap.v2alpha.AdminConfig.displayName = 'proto.envoy.config.common.tap.v2alpha.AdminConfig';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.ConfigTypeCase = {
  CONFIG_TYPE_NOT_SET: 0,
  ADMIN_CONFIG: 1,
  STATIC_CONFIG: 2
};

/**
 * @return {proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.ConfigTypeCase}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.getConfigTypeCase = function() {
  return /** @type {proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.ConfigTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.oneofGroups_[0]));
};



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
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    adminConfig: (f = msg.getAdminConfig()) && proto.envoy.config.common.tap.v2alpha.AdminConfig.toObject(includeInstance, f),
    staticConfig: (f = msg.getStaticConfig()) && envoy_service_tap_v2alpha_common_pb.TapConfig.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig;
  return proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.common.tap.v2alpha.AdminConfig;
      reader.readMessage(value,proto.envoy.config.common.tap.v2alpha.AdminConfig.deserializeBinaryFromReader);
      msg.setAdminConfig(value);
      break;
    case 2:
      var value = new envoy_service_tap_v2alpha_common_pb.TapConfig;
      reader.readMessage(value,envoy_service_tap_v2alpha_common_pb.TapConfig.deserializeBinaryFromReader);
      msg.setStaticConfig(value);
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
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdminConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.common.tap.v2alpha.AdminConfig.serializeBinaryToWriter
    );
  }
  f = message.getStaticConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_service_tap_v2alpha_common_pb.TapConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional AdminConfig admin_config = 1;
 * @return {?proto.envoy.config.common.tap.v2alpha.AdminConfig}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.getAdminConfig = function() {
  return /** @type{?proto.envoy.config.common.tap.v2alpha.AdminConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.common.tap.v2alpha.AdminConfig, 1));
};


/** @param {?proto.envoy.config.common.tap.v2alpha.AdminConfig|undefined} value */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.setAdminConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.clearAdminConfig = function() {
  this.setAdminConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.hasAdminConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional envoy.service.tap.v2alpha.TapConfig static_config = 2;
 * @return {?proto.envoy.service.tap.v2alpha.TapConfig}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.getStaticConfig = function() {
  return /** @type{?proto.envoy.service.tap.v2alpha.TapConfig} */ (
    jspb.Message.getWrapperField(this, envoy_service_tap_v2alpha_common_pb.TapConfig, 2));
};


/** @param {?proto.envoy.service.tap.v2alpha.TapConfig|undefined} value */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.setStaticConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.clearStaticConfig = function() {
  this.setStaticConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig.prototype.hasStaticConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.envoy.config.common.tap.v2alpha.AdminConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.common.tap.v2alpha.AdminConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.common.tap.v2alpha.AdminConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.common.tap.v2alpha.AdminConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    configId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.envoy.config.common.tap.v2alpha.AdminConfig}
 */
proto.envoy.config.common.tap.v2alpha.AdminConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.common.tap.v2alpha.AdminConfig;
  return proto.envoy.config.common.tap.v2alpha.AdminConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.common.tap.v2alpha.AdminConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.common.tap.v2alpha.AdminConfig}
 */
proto.envoy.config.common.tap.v2alpha.AdminConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigId(value);
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
proto.envoy.config.common.tap.v2alpha.AdminConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.common.tap.v2alpha.AdminConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.common.tap.v2alpha.AdminConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.common.tap.v2alpha.AdminConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string config_id = 1;
 * @return {string}
 */
proto.envoy.config.common.tap.v2alpha.AdminConfig.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.common.tap.v2alpha.AdminConfig.prototype.setConfigId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.envoy.config.common.tap.v2alpha);
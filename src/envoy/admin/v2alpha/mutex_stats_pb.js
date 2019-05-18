/* eslint-disable */

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

goog.exportSymbol('proto.envoy.admin.v2alpha.MutexStats', null, global);
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
proto.envoy.admin.v2alpha.MutexStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.admin.v2alpha.MutexStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.admin.v2alpha.MutexStats.displayName = 'proto.envoy.admin.v2alpha.MutexStats';
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
proto.envoy.admin.v2alpha.MutexStats.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.admin.v2alpha.MutexStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.admin.v2alpha.MutexStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.MutexStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    numContentions: jspb.Message.getFieldWithDefault(msg, 1, 0),
    currentWaitCycles: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lifetimeWaitCycles: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.envoy.admin.v2alpha.MutexStats}
 */
proto.envoy.admin.v2alpha.MutexStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.admin.v2alpha.MutexStats;
  return proto.envoy.admin.v2alpha.MutexStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.admin.v2alpha.MutexStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.admin.v2alpha.MutexStats}
 */
proto.envoy.admin.v2alpha.MutexStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumContentions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentWaitCycles(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLifetimeWaitCycles(value);
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
proto.envoy.admin.v2alpha.MutexStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.admin.v2alpha.MutexStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.admin.v2alpha.MutexStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.MutexStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumContentions();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCurrentWaitCycles();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLifetimeWaitCycles();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 num_contentions = 1;
 * @return {number}
 */
proto.envoy.admin.v2alpha.MutexStats.prototype.getNumContentions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.MutexStats.prototype.setNumContentions = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 current_wait_cycles = 2;
 * @return {number}
 */
proto.envoy.admin.v2alpha.MutexStats.prototype.getCurrentWaitCycles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.MutexStats.prototype.setCurrentWaitCycles = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 lifetime_wait_cycles = 3;
 * @return {number}
 */
proto.envoy.admin.v2alpha.MutexStats.prototype.getLifetimeWaitCycles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.MutexStats.prototype.setLifetimeWaitCycles = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.envoy.admin.v2alpha);
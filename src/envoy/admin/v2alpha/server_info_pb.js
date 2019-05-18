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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.envoy.admin.v2alpha.CommandLineOptions', null, global);
goog.exportSymbol('proto.envoy.admin.v2alpha.CommandLineOptions.IpVersion', null, global);
goog.exportSymbol('proto.envoy.admin.v2alpha.CommandLineOptions.Mode', null, global);
goog.exportSymbol('proto.envoy.admin.v2alpha.ServerInfo', null, global);
goog.exportSymbol('proto.envoy.admin.v2alpha.ServerInfo.State', null, global);
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
proto.envoy.admin.v2alpha.ServerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.admin.v2alpha.ServerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.admin.v2alpha.ServerInfo.displayName = 'proto.envoy.admin.v2alpha.ServerInfo';
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
proto.envoy.admin.v2alpha.CommandLineOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.admin.v2alpha.CommandLineOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.admin.v2alpha.CommandLineOptions.displayName = 'proto.envoy.admin.v2alpha.CommandLineOptions';
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
proto.envoy.admin.v2alpha.ServerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.admin.v2alpha.ServerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.admin.v2alpha.ServerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.ServerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uptimeCurrentEpoch: (f = msg.getUptimeCurrentEpoch()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    uptimeAllEpochs: (f = msg.getUptimeAllEpochs()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    commandLineOptions: (f = msg.getCommandLineOptions()) && proto.envoy.admin.v2alpha.CommandLineOptions.toObject(includeInstance, f)
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
 * @return {!proto.envoy.admin.v2alpha.ServerInfo}
 */
proto.envoy.admin.v2alpha.ServerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.admin.v2alpha.ServerInfo;
  return proto.envoy.admin.v2alpha.ServerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.admin.v2alpha.ServerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.admin.v2alpha.ServerInfo}
 */
proto.envoy.admin.v2alpha.ServerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {!proto.envoy.admin.v2alpha.ServerInfo.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setUptimeCurrentEpoch(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setUptimeAllEpochs(value);
      break;
    case 6:
      var value = new proto.envoy.admin.v2alpha.CommandLineOptions;
      reader.readMessage(value,proto.envoy.admin.v2alpha.CommandLineOptions.deserializeBinaryFromReader);
      msg.setCommandLineOptions(value);
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
proto.envoy.admin.v2alpha.ServerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.admin.v2alpha.ServerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.admin.v2alpha.ServerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.ServerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUptimeCurrentEpoch();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getUptimeAllEpochs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCommandLineOptions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.envoy.admin.v2alpha.CommandLineOptions.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.admin.v2alpha.ServerInfo.State = {
  LIVE: 0,
  DRAINING: 1,
  PRE_INITIALIZING: 2,
  INITIALIZING: 3
};

/**
 * optional string version = 1;
 * @return {string}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.ServerInfo.prototype.setVersion = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional State state = 2;
 * @return {!proto.envoy.admin.v2alpha.ServerInfo.State}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.getState = function() {
  return /** @type {!proto.envoy.admin.v2alpha.ServerInfo.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.envoy.admin.v2alpha.ServerInfo.State} value */
proto.envoy.admin.v2alpha.ServerInfo.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Duration uptime_current_epoch = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.getUptimeCurrentEpoch = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.admin.v2alpha.ServerInfo.prototype.setUptimeCurrentEpoch = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.clearUptimeCurrentEpoch = function() {
  this.setUptimeCurrentEpoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.hasUptimeCurrentEpoch = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration uptime_all_epochs = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.getUptimeAllEpochs = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.admin.v2alpha.ServerInfo.prototype.setUptimeAllEpochs = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.clearUptimeAllEpochs = function() {
  this.setUptimeAllEpochs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.hasUptimeAllEpochs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CommandLineOptions command_line_options = 6;
 * @return {?proto.envoy.admin.v2alpha.CommandLineOptions}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.getCommandLineOptions = function() {
  return /** @type{?proto.envoy.admin.v2alpha.CommandLineOptions} */ (
    jspb.Message.getWrapperField(this, proto.envoy.admin.v2alpha.CommandLineOptions, 6));
};


/** @param {?proto.envoy.admin.v2alpha.CommandLineOptions|undefined} value */
proto.envoy.admin.v2alpha.ServerInfo.prototype.setCommandLineOptions = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.clearCommandLineOptions = function() {
  this.setCommandLineOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.ServerInfo.prototype.hasCommandLineOptions = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.admin.v2alpha.CommandLineOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.admin.v2alpha.CommandLineOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.CommandLineOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    concurrency: jspb.Message.getFieldWithDefault(msg, 2, 0),
    configPath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    configYaml: jspb.Message.getFieldWithDefault(msg, 4, ""),
    allowUnknownFields: jspb.Message.getFieldWithDefault(msg, 5, false),
    adminAddressPath: jspb.Message.getFieldWithDefault(msg, 6, ""),
    localAddressIpVersion: jspb.Message.getFieldWithDefault(msg, 7, 0),
    logLevel: jspb.Message.getFieldWithDefault(msg, 8, ""),
    componentLogLevel: jspb.Message.getFieldWithDefault(msg, 9, ""),
    logFormat: jspb.Message.getFieldWithDefault(msg, 10, ""),
    logPath: jspb.Message.getFieldWithDefault(msg, 11, ""),
    hotRestartVersion: jspb.Message.getFieldWithDefault(msg, 12, false),
    serviceCluster: jspb.Message.getFieldWithDefault(msg, 13, ""),
    serviceNode: jspb.Message.getFieldWithDefault(msg, 14, ""),
    serviceZone: jspb.Message.getFieldWithDefault(msg, 15, ""),
    fileFlushInterval: (f = msg.getFileFlushInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    drainTime: (f = msg.getDrainTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    parentShutdownTime: (f = msg.getParentShutdownTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    mode: jspb.Message.getFieldWithDefault(msg, 19, 0),
    maxStats: jspb.Message.getFieldWithDefault(msg, 20, 0),
    maxObjNameLen: jspb.Message.getFieldWithDefault(msg, 21, 0),
    disableHotRestart: jspb.Message.getFieldWithDefault(msg, 22, false),
    enableMutexTracing: jspb.Message.getFieldWithDefault(msg, 23, false),
    restartEpoch: jspb.Message.getFieldWithDefault(msg, 24, 0),
    cpusetThreads: jspb.Message.getFieldWithDefault(msg, 25, false)
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
 * @return {!proto.envoy.admin.v2alpha.CommandLineOptions}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.admin.v2alpha.CommandLineOptions;
  return proto.envoy.admin.v2alpha.CommandLineOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.admin.v2alpha.CommandLineOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.admin.v2alpha.CommandLineOptions}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBaseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConcurrency(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigYaml(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowUnknownFields(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminAddressPath(value);
      break;
    case 7:
      var value = /** @type {!proto.envoy.admin.v2alpha.CommandLineOptions.IpVersion} */ (reader.readEnum());
      msg.setLocalAddressIpVersion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogLevel(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentLogLevel(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogFormat(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogPath(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHotRestartVersion(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceCluster(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceNode(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceZone(value);
      break;
    case 16:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setFileFlushInterval(value);
      break;
    case 17:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDrainTime(value);
      break;
    case 18:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setParentShutdownTime(value);
      break;
    case 19:
      var value = /** @type {!proto.envoy.admin.v2alpha.CommandLineOptions.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxStats(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxObjNameLen(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableHotRestart(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableMutexTracing(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRestartEpoch(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCpusetThreads(value);
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
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.admin.v2alpha.CommandLineOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.admin.v2alpha.CommandLineOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.CommandLineOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getConcurrency();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getConfigPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfigYaml();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAllowUnknownFields();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAdminAddressPath();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLocalAddressIpVersion();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getLogLevel();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getComponentLogLevel();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLogFormat();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLogPath();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getHotRestartVersion();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getServiceCluster();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getServiceNode();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getServiceZone();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getFileFlushInterval();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDrainTime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getParentShutdownTime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = message.getMaxStats();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getMaxObjNameLen();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = message.getDisableHotRestart();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getEnableMutexTracing();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getRestartEpoch();
  if (f !== 0) {
    writer.writeUint32(
      24,
      f
    );
  }
  f = message.getCpusetThreads();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.IpVersion = {
  V4: 0,
  V6: 1
};

/**
 * @enum {number}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.Mode = {
  SERVE: 0,
  VALIDATE: 1,
  INITONLY: 2
};

/**
 * optional uint64 base_id = 1;
 * @return {number}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getBaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setBaseId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 concurrency = 2;
 * @return {number}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getConcurrency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setConcurrency = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string config_path = 3;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setConfigPath = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string config_yaml = 4;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getConfigYaml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setConfigYaml = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool allow_unknown_fields = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getAllowUnknownFields = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setAllowUnknownFields = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string admin_address_path = 6;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getAdminAddressPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setAdminAddressPath = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional IpVersion local_address_ip_version = 7;
 * @return {!proto.envoy.admin.v2alpha.CommandLineOptions.IpVersion}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getLocalAddressIpVersion = function() {
  return /** @type {!proto.envoy.admin.v2alpha.CommandLineOptions.IpVersion} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.envoy.admin.v2alpha.CommandLineOptions.IpVersion} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setLocalAddressIpVersion = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string log_level = 8;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getLogLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setLogLevel = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string component_log_level = 9;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getComponentLogLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setComponentLogLevel = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string log_format = 10;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getLogFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setLogFormat = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string log_path = 11;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getLogPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setLogPath = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool hot_restart_version = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getHotRestartVersion = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setHotRestartVersion = function(value) {
  jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string service_cluster = 13;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getServiceCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setServiceCluster = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string service_node = 14;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getServiceNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setServiceNode = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string service_zone = 15;
 * @return {string}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getServiceZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setServiceZone = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional google.protobuf.Duration file_flush_interval = 16;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getFileFlushInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 16));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setFileFlushInterval = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.clearFileFlushInterval = function() {
  this.setFileFlushInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.hasFileFlushInterval = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Duration drain_time = 17;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getDrainTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 17));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setDrainTime = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.clearDrainTime = function() {
  this.setDrainTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.hasDrainTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Duration parent_shutdown_time = 18;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getParentShutdownTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 18));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setParentShutdownTime = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.clearParentShutdownTime = function() {
  this.setParentShutdownTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.hasParentShutdownTime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Mode mode = 19;
 * @return {!proto.envoy.admin.v2alpha.CommandLineOptions.Mode}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getMode = function() {
  return /** @type {!proto.envoy.admin.v2alpha.CommandLineOptions.Mode} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {!proto.envoy.admin.v2alpha.CommandLineOptions.Mode} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setMode = function(value) {
  jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional uint64 max_stats = 20;
 * @return {number}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getMaxStats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setMaxStats = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint64 max_obj_name_len = 21;
 * @return {number}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getMaxObjNameLen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setMaxObjNameLen = function(value) {
  jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional bool disable_hot_restart = 22;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getDisableHotRestart = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 22, false));
};


/** @param {boolean} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setDisableHotRestart = function(value) {
  jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool enable_mutex_tracing = 23;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getEnableMutexTracing = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 23, false));
};


/** @param {boolean} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setEnableMutexTracing = function(value) {
  jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional uint32 restart_epoch = 24;
 * @return {number}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getRestartEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/** @param {number} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setRestartEpoch = function(value) {
  jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional bool cpuset_threads = 25;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.getCpusetThreads = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 25, false));
};


/** @param {boolean} value */
proto.envoy.admin.v2alpha.CommandLineOptions.prototype.setCpusetThreads = function(value) {
  jspb.Message.setProto3BooleanField(this, 25, value);
};


goog.object.extend(exports, proto.envoy.admin.v2alpha);
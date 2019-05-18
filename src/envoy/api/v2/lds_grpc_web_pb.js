/* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for envoy.api.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var envoy_api_v2_core_address_pb = require('./envoy/api/v2/core/address_pb.js')

var envoy_api_v2_core_base_pb = require('./envoy/api/v2/core/base_pb.js')

var envoy_api_v2_discovery_pb = require('./envoy/api/v2/discovery_pb.js')

var envoy_api_v2_listener_listener_pb = require('./envoy/api/v2/listener/listener_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var validate_validate_pb = require('./validate/validate_pb.js')

var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js')
const proto = {};
proto.envoy = {};
proto.envoy.api = {};
proto.envoy.api.v2 = require('./lds_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.api.v2.ListenerDiscoveryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.api.v2.ListenerDiscoveryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.envoy.api.v2.DiscoveryRequest,
 *   !proto.envoy.api.v2.DiscoveryResponse>}
 */
const methodInfo_ListenerDiscoveryService_FetchListeners = new grpc.web.AbstractClientBase.MethodInfo(
  envoy_api_v2_discovery_pb.DiscoveryResponse,
  /** @param {!proto.envoy.api.v2.DiscoveryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  envoy_api_v2_discovery_pb.DiscoveryResponse.deserializeBinary
);


/**
 * @param {!proto.envoy.api.v2.DiscoveryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.envoy.api.v2.DiscoveryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.envoy.api.v2.DiscoveryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.envoy.api.v2.ListenerDiscoveryServiceClient.prototype.fetchListeners =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/envoy.api.v2.ListenerDiscoveryService/FetchListeners',
      request,
      metadata || {},
      methodInfo_ListenerDiscoveryService_FetchListeners,
      callback);
};


/**
 * @param {!proto.envoy.api.v2.DiscoveryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.envoy.api.v2.DiscoveryResponse>}
 *     A native promise that resolves to the response
 */
proto.envoy.api.v2.ListenerDiscoveryServicePromiseClient.prototype.fetchListeners =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/envoy.api.v2.ListenerDiscoveryService/FetchListeners',
      request,
      metadata || {},
      methodInfo_ListenerDiscoveryService_FetchListeners);
};


module.exports = proto.envoy.api.v2;

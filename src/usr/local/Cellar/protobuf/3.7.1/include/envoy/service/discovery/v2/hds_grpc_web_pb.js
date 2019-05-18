/**
 * @fileoverview gRPC-Web generated client stub for envoy.service.discovery.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var envoy_api_v2_core_base_pb = require('./envoy/api/v2/core/base_pb.js')

var envoy_api_v2_core_health_check_pb = require('./envoy/api/v2/core/health_check_pb.js')

var envoy_api_v2_endpoint_endpoint_pb = require('./envoy/api/v2/endpoint/endpoint_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')
const proto = {};
proto.envoy = {};
proto.envoy.service = {};
proto.envoy.service.discovery = {};
proto.envoy.service.discovery.v2 = require('./hds_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.service.discovery.v2.HealthDiscoveryServiceClient =
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
proto.envoy.service.discovery.v2.HealthDiscoveryServicePromiseClient =
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
 *   !proto.envoy.service.discovery.v2.HealthCheckRequestOrEndpointHealthResponse,
 *   !proto.envoy.service.discovery.v2.HealthCheckSpecifier>}
 */
const methodInfo_HealthDiscoveryService_FetchHealthCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.envoy.service.discovery.v2.HealthCheckSpecifier,
  /** @param {!proto.envoy.service.discovery.v2.HealthCheckRequestOrEndpointHealthResponse} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.envoy.service.discovery.v2.HealthCheckSpecifier.deserializeBinary
);


/**
 * @param {!proto.envoy.service.discovery.v2.HealthCheckRequestOrEndpointHealthResponse} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.envoy.service.discovery.v2.HealthCheckSpecifier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.envoy.service.discovery.v2.HealthCheckSpecifier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.envoy.service.discovery.v2.HealthDiscoveryServiceClient.prototype.fetchHealthCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/envoy.service.discovery.v2.HealthDiscoveryService/FetchHealthCheck',
      request,
      metadata || {},
      methodInfo_HealthDiscoveryService_FetchHealthCheck,
      callback);
};


/**
 * @param {!proto.envoy.service.discovery.v2.HealthCheckRequestOrEndpointHealthResponse} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.envoy.service.discovery.v2.HealthCheckSpecifier>}
 *     A native promise that resolves to the response
 */
proto.envoy.service.discovery.v2.HealthDiscoveryServicePromiseClient.prototype.fetchHealthCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/envoy.service.discovery.v2.HealthDiscoveryService/FetchHealthCheck',
      request,
      metadata || {},
      methodInfo_HealthDiscoveryService_FetchHealthCheck);
};


module.exports = proto.envoy.service.discovery.v2;


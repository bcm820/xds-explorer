/**
 * @fileoverview gRPC-Web generated client stub for envoy.service.ratelimit.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var envoy_api_v2_core_base_pb = require('./envoy/api/v2/core/base_pb.js')

var envoy_api_v2_ratelimit_ratelimit_pb = require('./envoy/api/v2/ratelimit/ratelimit_pb.js')

var validate_validate_pb = require('./validate/validate_pb.js')
const proto = {};
proto.envoy = {};
proto.envoy.service = {};
proto.envoy.service.ratelimit = {};
proto.envoy.service.ratelimit.v2 = require('./rls_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.service.ratelimit.v2.RateLimitServiceClient =
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
proto.envoy.service.ratelimit.v2.RateLimitServicePromiseClient =
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
 *   !proto.envoy.service.ratelimit.v2.RateLimitRequest,
 *   !proto.envoy.service.ratelimit.v2.RateLimitResponse>}
 */
const methodInfo_RateLimitService_ShouldRateLimit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.envoy.service.ratelimit.v2.RateLimitResponse,
  /** @param {!proto.envoy.service.ratelimit.v2.RateLimitRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.envoy.service.ratelimit.v2.RateLimitResponse.deserializeBinary
);


/**
 * @param {!proto.envoy.service.ratelimit.v2.RateLimitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.envoy.service.ratelimit.v2.RateLimitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.envoy.service.ratelimit.v2.RateLimitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.envoy.service.ratelimit.v2.RateLimitServiceClient.prototype.shouldRateLimit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/envoy.service.ratelimit.v2.RateLimitService/ShouldRateLimit',
      request,
      metadata || {},
      methodInfo_RateLimitService_ShouldRateLimit,
      callback);
};


/**
 * @param {!proto.envoy.service.ratelimit.v2.RateLimitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.envoy.service.ratelimit.v2.RateLimitResponse>}
 *     A native promise that resolves to the response
 */
proto.envoy.service.ratelimit.v2.RateLimitServicePromiseClient.prototype.shouldRateLimit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/envoy.service.ratelimit.v2.RateLimitService/ShouldRateLimit',
      request,
      metadata || {},
      methodInfo_RateLimitService_ShouldRateLimit);
};


module.exports = proto.envoy.service.ratelimit.v2;


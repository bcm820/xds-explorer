/**
 * @fileoverview gRPC-Web generated client stub for envoy.service.auth.v2alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var envoy_service_auth_v2_external_auth_pb = require('./envoy/service/auth/v2/external_auth_pb.js')
const proto = {};
proto.envoy = {};
proto.envoy.service = {};
proto.envoy.service.auth = {};
proto.envoy.service.auth.v2alpha = require('./external_auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.service.auth.v2alpha.AuthorizationClient =
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
proto.envoy.service.auth.v2alpha.AuthorizationPromiseClient =
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
 *   !proto.envoy.service.auth.v2.CheckRequest,
 *   !proto.envoy.service.auth.v2.CheckResponse>}
 */
const methodInfo_Authorization_Check = new grpc.web.AbstractClientBase.MethodInfo(
  envoy_service_auth_v2_external_auth_pb.CheckResponse,
  /** @param {!proto.envoy.service.auth.v2.CheckRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  envoy_service_auth_v2_external_auth_pb.CheckResponse.deserializeBinary
);


/**
 * @param {!proto.envoy.service.auth.v2.CheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.envoy.service.auth.v2.CheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.envoy.service.auth.v2.CheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.envoy.service.auth.v2alpha.AuthorizationClient.prototype.check =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/envoy.service.auth.v2alpha.Authorization/Check',
      request,
      metadata || {},
      methodInfo_Authorization_Check,
      callback);
};


/**
 * @param {!proto.envoy.service.auth.v2.CheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.envoy.service.auth.v2.CheckResponse>}
 *     A native promise that resolves to the response
 */
proto.envoy.service.auth.v2alpha.AuthorizationPromiseClient.prototype.check =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/envoy.service.auth.v2alpha.Authorization/Check',
      request,
      metadata || {},
      methodInfo_Authorization_Check);
};


module.exports = proto.envoy.service.auth.v2alpha;


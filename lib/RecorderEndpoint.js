/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var checkType = require('checktype');

var UriEndpoint = require('kws-media-api-elements').abstracts.UriEndpoint;

/**
 * 
 *
 * @classdesc
 *  Provides function to store contents in reliable mode (doesn't discard data). It contains {@link module:core/abstracts.MediaSink MediaSink} pads for audio and video.
 *
 * @extends module:core/abstracts.UriEndpoint
 *
 * @constructor module:elements.RecorderEndpoint
 *
 * @param {external:String} id
 */
function RecorderEndpoint(id){
  UriEndpoint.call(this, id);
};
inherits(RecorderEndpoint, UriEndpoint);


/**
 * Starts storing media received through the {@link module:core/abstracts.MediaSink MediaSink} pad
 *
 * @alias module:elements.RecorderEndpoint.record
 *
 * @param {module:elements.RecorderEndpoint~recordCallback} [callback]
 *
 * @return {external:Promise}
 */
RecorderEndpoint.prototype.record = function(callback){
  return this.invoke('record', callback);
};
/**
 * @callback module:elements.RecorderEndpoint~recordCallback
 * @param {external:Error} error
 */

/**
 * @alias module:elements.RecorderEndpoint.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the endpoint belongs
 *
 * @property {module:elements/complexTypes.MediaProfileSpecType} [mediaProfile]
 *  Choose either a {@link module:elements.RecorderEndpoint#MediaProfileSpecType.WEBM} or a {@link module:elements.RecorderEndpoint#MediaProfileSpecType.MP4} profile for recording
 *
 * @property {external:Boolean} [stopOnEndOfStream]
 *  Forces the recorder endpoint to finish processing data when an <a href="http://www.kurento.org/docs/current/glossary.html#term-eos">EOS</a> is detected in the stream
 *
 * @property {external:String} uri
 *  URI where the recording will be stored
 */
RecorderEndpoint.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },

  mediaProfile: {
    type: 'MediaProfileSpecType',
  },

  stopOnEndOfStream: {
    type: 'boolean',
  },

  uri: {
    type: 'String',
    required: true
  },
};

/**
 * @alias module:elements.RecorderEndpoint.events
 *
 * @extend module:core/abstracts.UriEndpoint.events
 */
RecorderEndpoint.events = [];
RecorderEndpoint.events.concat(UriEndpoint.events);

module.exports = RecorderEndpoint;

RecorderEndpoint.check = function(key, value)
{
  if(!(value instanceof RecorderEndpoint))
    throw SyntaxError(key+' param should be a RecorderEndpoint, not '+typeof value);
};
// ==UserScript==
// @name         <%= meta.name %>
// @version      <%= version %>
// @namespace    <%= name %>
// @description  <%= description %>
// @minGMVer     <%= meta.min.greasemonkey %>
// @minFFVer     <%= meta.min.firefox %>
// @license      <%= license %>; <%= meta.repo %>blob/<%= meta.mainBranch %>/LICENSE 
<%=
meta.matches.map(function(match) {
return '// @match        ' + match;
}).join('\n')
%>
// @match        *://boards.4chan.org/*
// @match        *://boards.4channel.org/*
// @include      http://boards.4chan.org/*
// @include      https://boards.4chan.org/*
// @include      http://sys.4chan.org/*
// @include      https://sys.4chan.org/*
// @include      http://www.4chan.org/*
// @include      https://www.4chan.org/*
// @include      http://boards.4channel.org/*
// @include      https://boards.4channel.org/*
// @include      http://sys.4channel.org/*
// @include      https://sys.4channel.org/*
// @include      http://www.4channel.org/*
// @include      https://www.4channel.org/*
// @include      http://i.4cdn.org/*
// @include      https://i.4cdn.org/*
// @include      http://is.4chan.org/*
// @include      https://is.4chan.org/*
// @include      http://is2.4chan.org/*
// @include      https://is2.4chan.org/*
// @include      http://is.4channel.org/*
// @include      https://is.4channel.org/*
// @include      http://is2.4channel.org/*
// @include      https://is2.4channel.org/*
// @include      https://www.google.com/recaptcha/api2/anchor?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      https://www.google.com/recaptcha/api2/frame?*&k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      https://www.google.com/recaptcha/api2/frame?*&k=887877714&*
// @include      https://www.google.com/recaptcha/api2/bframe?*&k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      http://www.google.com/recaptcha/api/fallback?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      https://www.google.com/recaptcha/api/fallback?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @exclude      http://www.4chan.org/pass
// @exclude      https://www.4chan.org/pass
// @exclude      http://www.4chan.org/pass?*
// @exclude      https://www.4chan.org/pass?*
// @exclude      http://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise
// @exclude      http://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/advertise?*
// @exclude      http://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate
// @exclude      http://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/donate?*
// @exclude      http://www.4channel.org/pass
// @exclude      https://www.4channel.org/pass
// @exclude      http://www.4channel.org/pass?*
// @exclude      https://www.4channel.org/pass?*
// @exclude      http://www.4channel.org/advertise
// @exclude      https://www.4channel.org/advertise
// @exclude      http://www.4channel.org/advertise?*
// @exclude      https://www.4channel.org/advertise?*
// @exclude      http://www.4channel.org/donate
// @exclude      https://www.4channel.org/donate
// @exclude      http://www.4channel.org/donate?*
// @exclude      https://www.4channel.org/donate?*
// @connect      4chan.org
// @connect      4channel.org
// @connect      4cdn.org
// @connect      mayhemydg.github.io
// @connect      archive.4plebs.org
// @connect      archive.nyafuu.org
// @connect      archive.rebeccablacktech.com
// @connect      warosu.org
// @connect      desuarchive.org
// @connect      boards.fireden.net
// @connect      arch.b4k.co
// @connect      archive.b-stats.org
// @connect      archived.moe
// @connect      thebarchive.com
// @connect      archiveofsins.com
// @connect      api.clyp.it
// @connect      api.dailymotion.com
// @connect      api.github.com
// @connect      soundcloud.com
// @connect      vimeo.com
// @connect      www.googleapis.com
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @run-at       document-start
// @updateURL    <%= meta.downloads %><%= meta.files.metajs %>
// @downloadURL  <%= meta.downloads %><%= meta.files.userjs %>
// @icon         data:image/png;base64,<%= grunt.file.read('src/img/icon48.png', {encoding: 'base64'}) %>
// ==/UserScript==

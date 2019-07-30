// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const AESR_ExtensionId = "jpmkfafbacpgapdghgdpembnojdlgkdl";

const urlTofetch = document.getElementById('url-to-fetch')
let buttonToSendData = document.getElementById('send-data')

buttonToSendData.onclick = function() {
    chrome.runtime.sendMessage(AESR_ExtensionId, {
      action: 'updateConfig',
      dataType: 'ini',
      data: urlTofetch.value
    }, function(response) {
    });
};
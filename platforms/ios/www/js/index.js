/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    authenticate: function(host){
        console.log("index.js : authenticate");
        //authDialog.authenticate(,successCallback,errorCallback,"user1","gensler");
        authDialog.authenticate("http://localhost:8080", function () { app.log('Successfully done!'); }, function (err) { app.log('Error occured: ' + err);});
        
    },
    getAppPreferences: function(){
        console.log("index.js : getAppPreferences");
        
        count = 0;
        prefsArray = ['cms_url', 'username', 'user_password'];
        prefResults = [];
        var prefs = plugins.appPreferences;
        
        function ok (value) {
            console.log("index.js : getAppPreferences : ok : " + value);
            console.log("index.js : getAppPreferences : ok : " + count);
        
            var d = { 'name' : prefsArray[count] , 'value' : value};
            
            
            prefResults.push(d);
            
            if( count >= prefsArray.length || prefResults.length === prefsArray.length){
                complete();
            }else{
                notComplete();
            }

        };
       
        function fail (error) {
            console.log("index.js : getAppPreferences : fail : " + error);
            count++
            if( count >= prefsArray.length || prefResults.length === prefsArray.length){
                complete();
            }else{
                notComplete();
            }
        };
        
        function complete(){
            console.log("index.js : getAppPreferences : complete");
            app.launchBrowser( this.prefResults);
        };
        
        function notComplete(){
            console.log("index.js : notComplete ");
            count++;
            prefs.fetch(ok.bind(this), fail.bind(this), prefsArray[count]);
            
        };
  
        prefs.fetch(ok.bind(this), fail.bind(this), prefsArray[count]);
        console.log("index.js : RETURN : "  + prefResults);
        return prefResults;

    },
    launchBrowser: function( prefResults){
        console.log("index.js : launchBrowser : " + prefResults[1].value + " : " + prefResults[2].value );
       
        
        authDialog.authenticate(prefResults[0].value, app.postAuthentication(prefResults[0].value), app.postAuthentication(prefResults[0].value),  prefResults[1].value,  prefResults[2].value);
        
        //function (err) { console.log('Error occured: ' + err);}
    },
    postAuthentication: function(uri){
         console.log("index.js : uri : "  + uri);
        
        var options = "";
        options = "location=no,toolbar=no,disallowoverscroll=yes";
        window.open = cordova.InAppBrowser.open;
        screen.orientation.lock('landscape');
        var iab = cordova.InAppBrowser;
        iab.open(uri, '_self', options);

    
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log("index.js : onDeviceReady");
        
        var lPrefs = this.getAppPreferences();
       
        console.log("index.js : +++++++++"+ lPrefs );
        
//        if( userPrefs )
        

    },
    loadStopCallBack: function(){
      console.log('loadStopCallBack: ');
    },
    receivedParam: function(value) {
        
    },
    failedReceivedParam:function(value) {
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    }
};

app.initialize();

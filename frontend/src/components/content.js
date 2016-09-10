import React from 'react';

export function Content(props) {
  return (
    <div id="contents" class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <script type="application/javascript" src="/admin/files/js/summary.js"></script>
          <link type="text/css" href="/admin/files/css/summary.css" rel="stylesheet"></link>
          <div id="process-info" class="text-center well well-sm" data-refresh-uri="/admin/metrics">
            <ul class="list-inline">
              <li><span class="glyphicon glyphicon-info-sign"/></li>
              <li data-key="jvm/uptime">
                <div>
                  <a href="/admin/metrics#jvm/uptime">jvm/uptime:</a>
                  <span id="jvm-uptime">...</span>
                  &middot;
                </div>
              </li>
              <li data-key="jvm/thread/count">
                <div>
                  <a href="/admin/metrics#jvm/thread/count">jvm/thread/count:</a>
                  <span id="jvm-thread-count">...</span>
                  &middot;
                </div>
              </li>
              <li data-key="jvm/mem/current/used">
                <div>
                  <a href="/admin/metrics#jvm/mem/current/used">jvm/mem/current/used:</a>
                  <span id="jvm-mem-current-used">...</span>
                  &middot;
                </div>
              </li>
              <li data-key="jvm/gc/msec">
                <div>
                  <a href="/admin/metrics#jvm/gc/msec">jvm/gc/msec:</a>
                  <span id="jvm-gc-msec">...</span>
                  &middot;
                </div>
              </li>
              <li>
                <div>
                  <b>Finagle Ver: </b>
                  <span>mynahbird/release-20160909-1311-acarroll-17-g48b36b0</span>
                </div>
              </li>
            </ul>
          </div>
          <div id="server-info" data-refresh-uri="/admin/servers/index.txt"></div>
          <div id="client-info" data-refresh-uri="/admin/clients/index.txt"></div>
        </div>
      </div>
    </div>
  );
}

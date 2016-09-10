import React from 'react';

export function Sidebar(props) {
  return (
      <nav id="sidebar">
        <ul>
          <a href="/admin">
            <li id="Summary" className="selectable selected">
              Summary
            </li>
          </a>

          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Downstream Clients</span>
            </div>
            <ul>
              <a href="/admin/clients/perftracer">
                <li id="perftracer" className="selectable ">
                  perftracer
                </li>
              </a>

              <a href="/admin/clients/zipkin-tracer">
                <li id="zipkin-tracer" className="selectable ">
                  zipkin-tracer
                </li>
              </a>
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Listening Servers</span>
            </div>
            <ul>
              <a href="/admin/servers/adminhttp">
                <li id="adminhttp" className="selectable ">
                  adminhttp
                </li>
              </a>

              <a href="/admin/servers/http">
                <li id="http" className="selectable ">
                  http
                </li>
              </a>
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Metrics</span>
            </div>
            <ul>
              <a href="/admin/metrics">
                <li id="Watch" className="selectable ">
                  Watch
                </li>
              </a>

              <a href="/admin/histograms">
                <li id="Histograms" className="selectable ">
                  Histograms
                </li>
              </a>

              <a href="/admin/per_host_metrics.json">
                <li id="/admin/per_host_metrics.json" className="selectable ">
                  /admin/per_host_metrics.json
                </li>
              </a>

              <a href="/admin/metrics.json?pretty=true">
                <li id="/admin/metrics.json" className="selectable ">
                  /admin/metrics.json
                </li>
              </a>
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Misc</span>
            </div>
            <ul>
              <a href="/admin/perfgraph">
                <li id="/admin/perfgraph" className="selectable ">
                  /admin/perfgraph
                </li>
              </a>

              <form method="post" id="/abortabortabort-form" action="/abortabortabort">
                <a href="#" onClick="document.getElementById('/abortabortabort-form').submit()">
                  <li id="/abortabortabort" className="selectable ">
                    /abortabortabort
                  </li>
                </a>
              </form>

              <form method="post" id="/quitquitquit-form" action="/quitquitquit">
                <a href="#" onClick="document.getElementById('/quitquitquit-form').submit()">
                  <li id="/quitquitquit" className="selectable ">
                    /quitquitquit
                  </li>
                </a>
              </form>

              <a href="/health">
                <li id="/health" className="selectable ">
                  /health
                </li>
              </a>
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
            <span className="glyphicon glyphicon-expand "></span>
            <span>Performance Profile</span>
            </div>
            <ul>
              <a href="/admin/contention">
                <li id="Contention" className="selectable ">
                  Contention
                </li>
              </a>

              <a href="/admin/pprof/heap">
                <li id="Heap" className="selectable ">
                  Heap
                </li>
              </a>

              <a href="/admin/pprof/profile">
                <li id="Profile" className="selectable ">
                  Profile
                </li>
              </a>

              <a href="/admin/pprof/contention">
                <li id="Blocked Profile" className="selectable ">
                  Blocked Profile
                </li>
              </a>
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Process Info</span>
            </div>
            <ul>
              <a href="/admin/server_info">
                <li id="Build Properties" className="selectable ">
                  Build Properties
                </li>
              </a>

              <a href="/admin/lint">
                <li id="Lint" className="selectable ">
                  Lint
                </li>
              </a>

              <a href="/admin/threads">
                <li id="Threads" className="selectable ">
                  Threads
                </li>
              </a>

              <a href="/admin/announcer">
                <li id="Announcer" className="selectable ">
                  Announcer
                </li>
              </a>

              <a href="/admin/dtab">
                <li id="Dtab" className="selectable ">
                  Dtab
                </li>
              </a>

              <a href="/admin/registry.json">
                <li id="Registry" className="selectable ">
                  Registry
                </li>
              </a>

              <a href="/admin/toggles">
                <li id="Toggles" className="selectable ">
                  Toggles
                </li>
              </a>
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Utilities</span>
            </div>
            <ul>
              <a href="/admin/ping">
                <li id="Ping" className="selectable ">
                  Ping
                </li>
              </a>

              <a href="/admin/shutdown">
                <li id="Shutdown" className="selectable ">
                  Shutdown
                </li>
              </a>

              <a href="/admin/tracing">
                <li id="Tracing" className="selectable ">
                  Tracing
                </li>
              </a>

              <a href="/admin/events">
                <li id="Events" className="selectable ">
                  Events
                </li>
              </a>

              <a href="/admin/logging">
                <li id="Logging" className="selectable ">
                  Logging
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </nav>
      );
}

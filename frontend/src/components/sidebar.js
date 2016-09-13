import React from 'react';
import { SidebarMenuItem } from './sidebar_menu_item';

export function Sidebar(props) {
  const perftracer_item = {
    link: "/admin/clients/perftracer",
    id: "perftracer",
    name: "perftracer"
  };
  const zipkin_item = {
    link: "/admin/clients/zipkin-tracer",
    id: "zipkin-tracer",
    name: "zipkin-tracer"
  };
  const adminhttp_item = {
    link: "/admin/servers/adminhttp",
    id: "adminhttp",
    name: "adminhttp"
  };
  const http_item = {
    link: "/admin/servers/http",
    id: "http",
    name: "http"
  };
  const watch_item = {
    link: "/admin/metrics",
    id: "Watch",
    name: "Watch"
  };
  const histograms_item = {
    link: "/admin/histograms",
    id: "Histograms",
    name: "Histograms"
  };
  const per_host_item = {
    link: "/admin/per_host_metrics.json",
    id: "/admin/per_host_metrics.json",
    name: "/admin/per_host_metrics.json"
  };
  const pretty_item = {
    link: "/admin/metrics.json?pretty=true",
    id: "/admin/metrics.json",
    name: "/admin/metrics.json"
  };

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
              <SidebarMenuItem item={perftracer_item} />
              <SidebarMenuItem item={zipkin_item} />
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Listening Servers</span>
            </div>
            <ul>
              <SidebarMenuItem item={adminhttp_item} />
              <SidebarMenuItem item={http_item} />
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
              <span className="glyphicon glyphicon-expand "></span>
              <span>Metrics</span>
            </div>
            <ul>
              <SidebarMenuItem item={watch_item} />
              <SidebarMenuItem item={histograms_item} />
              <SidebarMenuItem item={per_host_item} />
              <SidebarMenuItem item={pretty_item} />
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

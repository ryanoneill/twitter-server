import React from 'react';
import { SidebarMenuItem } from './sidebar_menu_item';

export function Sidebar(props) {
  const perftracer_item = {
    link: { url: "/admin/clients/perftracer", method: "get" },
    id: "perftracer",
    name: "perftracer"
  };
  const zipkin_item = {
    link: { url: "/admin/clients/zipkin-tracer", method: "get" },
    id: "zipkin-tracer",
    name: "zipkin-tracer"
  };
  const adminhttp_item = {
    link: { url: "/admin/servers/adminhttp", method: "get" },
    id: "adminhttp",
    name: "adminhttp"
  };
  const http_item = {
    link: { url: "/admin/servers/http", method: "get" },
    id: "http",
    name: "http"
  };
  const watch_item = {
    link: { url: "/admin/metrics", method: "get" },
    id: "Watch",
    name: "Watch"
  };
  const histograms_item = {
    link: { url: "/admin/histograms", method: "get" },
    id: "Histograms",
    name: "Histograms"
  };
  const per_host_item = {
    link: { url: "/admin/per_host_metrics.json", method: "get" },
    id: "/admin/per_host_metrics.json",
    name: "/admin/per_host_metrics.json"
  };
  const pretty_item = {
    link: { url: "/admin/metrics.json?pretty=true", method: "get" },
    id: "/admin/metrics.json",
    name: "/admin/metrics.json"
  };
  const perfgraph_item = {
    link: { url: "/admin/perfgraph", method: "get" },
    id: "/admin/perfgraph",
    name: "/admin/perfgraph"
  };
  const abort_item = {
    link: { url: "/abortabortabort", method: "post" },
    id: "/abortabortabort",
    name: "/abortabortabort"
  };
  const quit_item = {
    link: { url: "/quitquitquit", method: "post" },
    id: "/quitquitquit",
    name: "/quitquitquit"
  };
  const health_item = {
    link: { url: "/health", method: "get" },
    id: "/health",
    name: "/health"
  };
  const contention_item = {
    link: { url: "/admin/contention", method: "get" },
    id: "Contention",
    name: "Contention"
  };
  const heap_item = {
    link: { url: "/admin/pprof/heap", method: "get" },
    id: "Heap",
    name: "Heap"
  };
  const profile_item = {
    link: { url: "/admin/pprof/profile", method: "get" },
    id: "Profile",
    name: "Profile"
  };
  const blocked_item = {
    link: { url: "/admin/pprof/contention", method: "get" },
    id: "Blocked Profile",
    name: "Blocked Profile"
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
              <SidebarMenuItem item={perfgraph_item} />
              <SidebarMenuItem item={abort_item} />
              <SidebarMenuItem item={quit_item} />
              <SidebarMenuItem item={health_item} />
            </ul>
          </li>
          <li className="subnav ">
            <div className="subnav-title selectable">
            <span className="glyphicon glyphicon-expand "></span>
            <span>Performance Profile</span>
            </div>
            <ul>
              <SidebarMenuItem item={contention_item} />
              <SidebarMenuItem item={heap_item} />
              <SidebarMenuItem item={profile_item} />
              <SidebarMenuItem item={blocked_item} />
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

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
  const build_item = {
    link: { url: "/admin/server_info", method: "get" },
    id: "Build Properties",
    name: "Build Properties"
  };
  const lint_item = {
    link: { url: "/admin/lint", method: "get" },
    id: "Lint",
    name: "Lint"
  };
  const threads_item = {
    link: { url: "/admin/threads", method: "get" },
    id: "Threads",
    name: "Threads"
  };
  const announcer_item = {
    link: { url: "/admin/announcer", method: "get" },
    id: "Announcer",
    name: "Announcer"
  };
  const dtab_item = {
    link: { url: "/admin/dtab", method: "get" },
    id: "Dtab",
    name: "Dtab"
  };
  const registry_item = {
    link: { url: "/admin/registry.json", method: "get" },
    id: "Registry",
    name: "Registry"
  };
  const toggles_item = {
    link: { url: "/admin/toggles", method: "get" },
    id: "Toggles",
    name: "Toggles"
  };
  const ping_item = {
    link: { url: "/admin/ping", method: "get" },
    id: "Ping",
    name: "Ping"
  };
  const shutdown_item = {
    link: { url: "/admin/shutdown", method: "get" },
    id: "Shutdown",
    name: "Shutdown"
  };
  const tracing_item = {
    link: { url: "/admin/tracing", method: "get" },
    id: "Tracing",
    name: "Tracing"
  };
  const events_item = {
    link: { url: "/admin/events", method: "get" },
    id: "Events",
    name: "Events"
  };
  const logging_item = {
    link: { url: "/admin/logging", method: "get" },
    id: "Logging",
    name: "Logging"
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
            <SidebarMenuItem item={build_item} />
            <SidebarMenuItem item={lint_item} />
            <SidebarMenuItem item={threads_item} />
            <SidebarMenuItem item={announcer_item} />
            <SidebarMenuItem item={dtab_item} />
            <SidebarMenuItem item={registry_item} />
            <SidebarMenuItem item={toggles_item} />
          </ul>
        </li>
        <li className="subnav ">
          <div className="subnav-title selectable">
            <span className="glyphicon glyphicon-expand "></span>
            <span>Utilities</span>
          </div>
          <ul>
            <SidebarMenuItem item={ping_item} />
            <SidebarMenuItem item={shutdown_item} />
            <SidebarMenuItem item={tracing_item} />
            <SidebarMenuItem item={events_item} />
            <SidebarMenuItem item={logging_item} />
          </ul>
        </li>
      </ul>
    </nav>
  );
}

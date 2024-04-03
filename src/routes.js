export const routes = {
  playlist: function () {
    return this.dashboard + "playlist";
  },
  dashboard: "/dashboard",
  playlistPath: "/dashboard/playlist",
};

export function Music(id) {
  return routes.dashboard + "/music/" + id;

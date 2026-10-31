const files = import.meta.glob<string>('/routes/*.kml', { query: '?raw', import: 'default', eager: true });

export type LatLng = [number, number];

// Every line or polygon outline in routes/<name>.kml as [lat, lng] points. Empty if the file has none.
export function routeLines(name: string): LatLng[][] {
  const kml = files[`/routes/${name}.kml`] ?? '';
  const shapes = kml.matchAll(/<(?:LineString|LinearRing)\b[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>/g);
  return [...shapes].map(([, coordinates]) =>
    coordinates
      .trim()
      .split(/\s+/)
      .map((point) => {
        const [lng, lat] = point.split(',').map(Number);
        return [lat, lng];
      }),
  );
}

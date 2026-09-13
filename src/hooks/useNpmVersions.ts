import { useState, useEffect } from 'react';
import { NpmPackage } from '../data/cvData';

export function useNpmVersions(packages: NpmPackage[]) {
  const [versions, setVersions] = useState<Record<string, string>>(() =>
    packages.reduce<Record<string, string>>((acc, pkg) => {
      acc[pkg.name] = pkg.version;
      return acc;
    }, {}),
  );

  useEffect(() => {
    let isMounted = true;

    async function fetchAllVersions() {
      const updates: Record<string, string> = {};

      await Promise.allSettled(
        packages.map(async (pkg) => {
          try {
            const res = await fetch(
              `https://registry.npmjs.org/${encodeURIComponent(pkg.name)}/latest`,
            );
            if (!res.ok) return;
            const data = await res.json();
            if (data?.version) {
              updates[pkg.name] = data.version;
            }
          } catch {
            // Gracefully ignore fetch errors and fallback to static cvData version
          }
        }),
      );

      if (isMounted && Object.keys(updates).length > 0) {
        setVersions((prev) => ({ ...prev, ...updates }));
      }
    }

    fetchAllVersions();

    return () => {
      isMounted = false;
    };
  }, [packages]);

  return versions;
}

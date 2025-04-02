/**
 * Utility function to get the correct path for assets based on environment
 */
export function getAssetPath(path: string): string {
  // If path already includes the base path, return as is
  if (path.startsWith('/vocal-coachingg/')) {
    return path;
  }
  
  // Strip leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prefix with the base path
  if (process.env.NODE_ENV === 'production') {
    return `/vocal-coachingg/${cleanPath}`;
  }
  
  // In development, just return the path with a leading slash
  return `/${cleanPath}`;
}

/**
 * Utility function specifically for media files (audio, video)
 */
export function getMediaPath(path: string): string {
  return getAssetPath(`media/${path}`);
}

/**
 * Utility function specifically for image files
 */
export function getImagePath(path: string): string {
  return getAssetPath(`images/${path}`);
} 
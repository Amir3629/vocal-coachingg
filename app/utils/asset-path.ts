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
 * Utility to get the correct path for media files (audio, video)
 * based on the deployment environment
 */
export function getMediaPath(path: string): string {
  if (!path) return '';

  // Normalize the path by removing leading slash and handling extension
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // If path already has the correct GitHub Pages prefix, return it as is
  if (cleanPath.includes('/vocal-coachingg/')) {
    return cleanPath;
  }
  
  // Extract just the filename without directories if there are any
  const filename = cleanPath.split('/').pop() || cleanPath;
  
  // Strip query parameters if any
  const baseFilename = filename.split('?')[0];
  
  // Add extension if missing (default to mp3 for audio files)
  let finalPath = baseFilename;
  if (!finalPath.includes('.')) {
    // If no extension, check for common prefixes that suggest audio
    if (finalPath.startsWith('AUDIO-') || 
        finalPath.startsWith('music-') || 
        finalPath.startsWith('audio-')) {
      finalPath += '.mp3';
    }
  }
  
  // In production (GitHub Pages), prefix with repo name
  const isProduction = typeof window !== 'undefined' && 
                      window.location.hostname.includes('github.io');
  
  // If it's a GitHub Pages deployment, add the repo name to the path
  if (isProduction || typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return `/vocal-coachingg/audio/${finalPath}`;
  }
  
  // In development, use the local path
  return `/audio/${finalPath}`;
}

/**
 * Utility function specifically for image files
 */
export function getImagePath(path: string): string {
  return getAssetPath(`images/${path}`);
} 
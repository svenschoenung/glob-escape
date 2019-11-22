declare function escapeGlob(pattern: string): string;

declare function escapeGlobStringOrArray(escapeFn: typeof escapeGlob): typeof escape;

declare function escape(patterns: string[]): string[];
declare function escape(pattern: string): string;

export default escape;

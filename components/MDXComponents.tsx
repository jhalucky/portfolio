import Image from 'next/image';

export const MDXComponents = {
  Image: ({ src, alt, width = 600, height = 400, className = "" }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  }) => (
    <div className="flex justify-center my-8">
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
      </div>
    </div>
  ),
  img: ({ src, alt, className = "" }: {
    src: string;
    alt: string;
    className?: string;
  }) => (
    <div className="flex justify-center my-8">
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className={`max-w-full h-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
      </div>
    </div>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-foreground/80 leading-relaxed mb-4">
      {children}
    </p>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-foreground bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      {children}
    </strong>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-r-lg text-foreground/80 italic">
      {children}
    </blockquote>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside space-y-2 my-6 text-foreground/80">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside space-y-2 my-6 text-foreground/80">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-foreground/80">
      {children}
    </li>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-sm font-mono text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6 border border-gray-200 dark:border-gray-700">
      {children}
    </pre>
  ),
  hr: () => (
    <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
  ),
};

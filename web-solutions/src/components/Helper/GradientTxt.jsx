export function GradientText({text,size='text-5xl',width='w-60',h=""}) {
    return (
      <div className={`flex items-center justify-start ${width}`}>
        <h1 className={`${size} font-inter900 bg-gradient-to-r from-white to-greenPrimary bg-clip-text text-transparent bg-red-300 ${h}`}>
          {text}
        </h1>
      </div>
    );
  }
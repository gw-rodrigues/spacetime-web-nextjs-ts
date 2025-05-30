import { User } from 'lucide-react'
import Logo from '@/assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden bg-[url('../assets/bg-stars.svg')] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[200px] text-sm leading-snug">
            <span className="underline">Create you account</span> and save your
            memories.
          </p>
        </a>

        <div className="space-y-5">
          <Image src={Logo} alt="Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect important memories of your journey and share (if you want)
              with world!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          >
            Register Memorie
          </a>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
          Made with 💜 by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://gwrodrigues.dev"
          >
            Gleydson W. Rodrigues
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="loading-relaxed w-[360px] text-center">
            You don`t have registered any memory, start to{' '}
            <a href="" className="underline hover:text-gray-50">
              create now
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

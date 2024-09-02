import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
  'I’m Hicham aka saikyo , I code for a living and I make music as well.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        
        <div className="lg:order-first lg:row-span-">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          I’m Hicham, aka Saikyo—coding by day, making music by night.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved computers since I was a kid, as I’ve been curious about how things work and how they are built. I didn’t start coding until I was 20, but I quickly fell in love with it. I’ve been coding for 6 years now and I’ve been learning a lot since then.
            </p>
            <p>
              I’m a self-taught developer, I’ve learned a lot from the internet and from the people around me. and I’m always looking to learn more and improve my skills.
            </p>
            <p>
              And what I love more than coding is making music, it has been my passion since I was a kid watching festivals and concerts on YouTube. But I was never able to make music until I was 19 ( better late than never lol ). I’ve been making music for 7 years now starting with making music for clients as a ghost producer and then I started making music for myself as Saikyo.
              </p>
              <p>
                It’s a never ending journey of learning and improving and I’m always looking forward to what’s next.
              </p>
          </div>
        </div>
        <div className="lg:pl-20">
        {/* <ul role="list">
            <SocialLink href="https://www.instagram.com/yaa.its_saikyo/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/HichamHaddadi1" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/hicham-haddadi/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hichamhaddadi04@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hichamhaddadi04@gmail.com
            </SocialLink>
          </ul> */}
        </div>
      </div>
    </Container>
  )
}

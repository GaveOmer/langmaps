import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../images/logo1.jpg'
import { useMediaQuery } from '../util/UseMediaQuery'
const Nav = () => {
	const [toggled, setToggled] = useState(false)
	const matches = useMediaQuery('(min-width:1280px)')

	const navMotion = {
		visible: {
			opacity: 1,

			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.15,
			},
		},
		hidden: {
			opacity: 0,
		},
	}
	const itemMotion = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	}
	return (
		<nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 md:mx-16 lg:mx-32'>
			<svg
				className='absolute bottom-0 left-1/2 -translate-x-1/2'
				width='250'
				height={4}
				viewBox='0 0 250 4'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M2 2L428 2'
					stroke='#282828'
					strokeWidth={2}
					strokeLinecap='round'
				/>
			</svg>
			<div>
				<a href='/'>
					<img src={logo.src} alt='logo' className='w-12 h-12 object-cover' />
				</a>
			</div>
			
			{matches && (
				<div className='flex gap-12'>
					<a href='/'>Langmaps</a>
					<a href='/'>something</a>
					<a href='/'>something</a>
				</div>
			)}

			{!matches && (
				<div
					onClick={() => setToggled((prevToggle) => !prevToggle)}
					className='space-y-1.5 cursor-pointer z-50'
				>
					<motion.span
						animate={{
							rotateZ: toggled ? 45 : 0,
							y: toggled ? 8 : 0,
							x: toggled ? 12 : 0,
						}}
						className='block h-0.5 w-6 bg-black'
					></motion.span>
					<motion.span
						animate={{ width: toggled ? 0 : 24 }}
						className='block m-1.5 h-0.5 w-6 bg-black'
					></motion.span>
					<motion.span
						animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0 }}
						className='block m-3 h-0.5 w-6 bg-black'
					></motion.span>
				</div>
			)}
			{toggled && !matches && (
				<div className='fixed flex bg-white bottom-0 left-0 h-screen w-full items-center justify-center'>
					<motion.div
						variants={navMotion}
						animate='visible'
						initial='hidden'
						className='flex flex-col gap-24 text-lg'
					>
						<motion.a variants={itemMotion} href='/'>
							Langmaps
						</motion.a>
						<motion.a variants={itemMotion} href='/'>
							something
						</motion.a>
						<motion.a variants={itemMotion} href='/'>
							something
						</motion.a>
					</motion.div>
				</div>
			)}
			<h1 className='text-lg font-bold'>
				<a href='/'>Idioma</a>
			</h1>
		</nav>
	)
}

export default Nav

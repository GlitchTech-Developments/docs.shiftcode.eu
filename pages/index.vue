<template>
	<div class="mt-2 flex h-full w-full flex-col">
		<section class="w-full">
			<div
				class="mx-auto grid max-w-screen-xl px-4 py-8 lg:min-h-[22.5rem] lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0"
			>
				<div
					class="m-auto flex flex-col gap-2 place-self-center lg:col-span-7"
				>
					<div class="mb-6 flex justify-center lg:hidden">
						<img
							id="logo1"
							src="/images/color2-white_logo_transparent_background.webp"
							alt="Shiftcode Developments"
							class="z-0 m-auto h-32 w-auto"
						/>
					</div>
					<h2
						class="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl"
					>
						Welcome to ShiftCode!
					</h2>
					<h1
						class="mb-6 max-w-3xl font-light text-gray-200 md:text-lg lg:mb-8 lg:text-xl"
					>
						From websites, web-apps and one-pagers to native mobile
						& desktop applications.
					</h1>
					<div class="flex flex-col gap-2 lg:flex-row">
						<a
							href="#"
							class="inline-flex items-center justify-center rounded-lg border border-accentAlt bg-secondary px-5 py-3 text-center text-base font-medium text-accentAlt focus:ring-4 focus:ring-accentAlt hover:bg-accent"
						>
							Check out projects
							<svg
								class="ml-2 -mr-1 h-5 w-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
						<a
							href="#"
							class="inline-flex items-center justify-center rounded-lg border border-accentAlt bg-secondary px-5 py-3 text-center text-base font-medium text-accentAlt focus:ring-4 focus:ring-accentAlt hover:bg-accent"
						>
							Check our Github
						</a>
					</div>
				</div>
				<div
					class="relative hidden justify-center lg:col-span-5 lg:flex"
				>
					<img
						id="logo1_alt"
						src="/images/color2-white_logo_transparent_background.webp"
						alt="Shiftcode Developments"
						class="image-full absolute z-0 m-auto h-full w-auto transition-[filter] duration-500 ease-linear hover:hue-rotate-90"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	// page properties go here
};
</script>

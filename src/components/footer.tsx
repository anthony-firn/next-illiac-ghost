/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import Image from "next/image"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <Image width="300px" layout='fill' src="https://raw.githubusercontent.com/anthony4tner/illi.ac-logo/main/vector/logo-slogan-icon-left/default-white.svg" alt="illiac Logo" />
        ) : (
          <Image width="300px" layout='fill' src="https://raw.githubusercontent.com/anthony4tner/illi.ac-logo/main/vector/logo-slogan-icon-left/default-black.svg" alt="illiac Logo" />
        )}
        {/* {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
        >
          LekoArts
        </Link> */}
      </Flex>
    </Box>
  )
}

export default Footer

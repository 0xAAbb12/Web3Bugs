import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name' | 'color'>

const MoneyBagIcon: React.FC<Props> = ({ width = '21', height = '22' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.65 0.813965C9.76511 0.813965 8.9784 1.20463 8.42932 1.81396H6.65198C5.96898 1.81396 5.48676 2.48337 5.70276 3.13037L6.14807 4.47217C6.21607 4.67617 6.40963 4.81396 6.62463 4.81396H10.65H14.6754C14.8904 4.81396 15.082 4.67617 15.15 4.47217L15.5973 3.13037C15.8143 2.48337 15.3311 1.81396 14.6481 1.81396H12.8707C12.3217 1.20463 11.5349 0.813965 10.65 0.813965ZM6.65002 6.81396C6.65002 6.81396 0.650024 9.82796 0.650024 16.814C0.650024 17.649 0.752899 18.3903 0.946899 19.0483C1.4379 20.7123 3.02245 21.814 4.75745 21.814H16.5426C18.2776 21.814 19.8622 20.7123 20.3531 19.0483C20.5471 18.3903 20.65 17.649 20.65 16.814C20.65 9.82896 14.65 6.81396 14.65 6.81396H6.65002ZM10.9703 8.52686H10.9762C11.2282 8.52686 11.4332 8.73189 11.4332 8.98389V9.85498C11.6762 9.90098 12.844 10.1666 13.236 11.6226C13.38 12.1586 12.9638 12.6831 12.4098 12.6831C12.0138 12.6831 11.6637 12.4099 11.5797 12.0229C11.4367 11.3559 11.0754 11.2339 10.8844 11.2339C10.6954 11.2339 10.1969 11.2645 10.1969 12.2925C10.1969 14.0865 13.3512 13.5276 13.3512 16.4526C13.3512 18.5766 11.6075 18.8629 11.2985 18.9019V19.6577C11.2985 19.9097 11.0934 20.1147 10.8414 20.1147C10.5894 20.1147 10.3844 19.9097 10.3844 19.6577V18.9019C10.1434 18.8689 8.73127 18.7121 8.30627 17.0601C8.16927 16.5281 8.58735 16.0132 9.13635 16.0132H9.13831C9.53231 16.0132 9.88834 16.2795 9.97034 16.6655C10.1593 17.5525 10.7336 17.5073 10.8356 17.5073C10.9696 17.5073 11.6285 17.4824 11.6285 16.4644C11.6285 14.4304 8.47229 15.3337 8.47229 12.2847C8.47229 10.1947 10.2043 9.86859 10.5133 9.82959V8.98389C10.5133 8.73189 10.7183 8.52686 10.9703 8.52686Z"
        fill="url(#paint0_linear_113:858)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_113:858"
          x1="25.7991"
          y1="6.21714"
          x2="5.40166"
          y2="-3.78545"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#96E6A1" />
          <stop offset="1" stopColor="#D4FC79" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default MoneyBagIcon
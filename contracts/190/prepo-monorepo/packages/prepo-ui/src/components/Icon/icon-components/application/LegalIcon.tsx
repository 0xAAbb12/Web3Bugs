import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name'>

const LegalIcon: React.FC<Props> = ({ color = 'white', width = '20', height = '16', onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M11.3926 7.54939e-06C11.1328 0.00774869 10.8862 0.116328 10.7051 0.302742L9.7051 1.30274L5.55276 5.45313C5.55108 5.45482 5.55052 5.45729 5.54885 5.45899L4.55276 6.45509C4.45679 6.54723 4.38016 6.6576 4.32738 6.77973C4.2746 6.90186 4.24671 7.03329 4.24536 7.16633C4.24401 7.29937 4.26921 7.43134 4.3195 7.55452C4.36979 7.67769 4.44415 7.7896 4.53823 7.88368C4.63231 7.97775 4.74421 8.05211 4.86739 8.1024C4.99056 8.15269 5.12254 8.1779 5.25558 8.17655C5.38862 8.17519 5.52005 8.14731 5.64218 8.09453C5.76431 8.04174 5.87467 7.96512 5.96682 7.86915L6.26174 7.57423L8.1758 9.48829L0.542992 17.1211C0.447018 17.2132 0.370396 17.3236 0.317611 17.4457C0.264826 17.5679 0.23694 17.6993 0.235586 17.8323C0.234233 17.9654 0.259439 18.0974 0.309728 18.2205C0.360017 18.3437 0.434378 18.4556 0.528457 18.5497C0.622536 18.6438 0.734441 18.7181 0.857618 18.7684C0.980795 18.8187 1.11277 18.8439 1.24581 18.8426C1.37885 18.8412 1.51028 18.8133 1.63241 18.7605C1.75454 18.7078 1.86491 18.6311 1.95705 18.5352L9.58987 10.9024L11.6758 12.9883L11.3828 13.2813C11.2869 13.3734 11.2102 13.4838 11.1575 13.6059C11.1047 13.728 11.0768 13.8595 11.0754 13.9925C11.0741 14.1255 11.0993 14.2575 11.1496 14.3807C11.1999 14.5039 11.2742 14.6158 11.3683 14.7098C11.4624 14.8039 11.5743 14.8783 11.6975 14.9286C11.8206 14.9789 11.9526 15.0041 12.0857 15.0027C12.2187 15.0014 12.3501 14.9735 12.4723 14.9207C12.5944 14.8679 12.7048 14.7913 12.7969 14.6953L13.7949 13.6953L17.9473 9.54493L19.2852 8.20704C19.4297 8.06658 19.5284 7.88574 19.5683 7.68822C19.6083 7.4907 19.5877 7.28571 19.5091 7.10013C19.4306 6.91454 19.2978 6.75701 19.1282 6.64818C18.9586 6.53935 18.76 6.4843 18.5586 6.49024C18.2988 6.49798 18.0522 6.60656 17.8711 6.79298L17.2403 7.42384L11.8262 2.00977L12.1192 1.7168C12.2637 1.57634 12.3624 1.3955 12.4023 1.19798C12.4423 1.00046 12.4216 0.795477 12.3431 0.609891C12.2646 0.424305 12.1318 0.266776 11.9622 0.157947C11.7926 0.0491183 11.594 -0.00593304 11.3926 7.54939e-06ZM12.2656 17C12.1331 16.9981 12.0016 17.0226 11.8786 17.072C11.7556 17.1214 11.6437 17.1948 11.5493 17.2878C11.455 17.3809 11.38 17.4918 11.3289 17.614C11.2777 17.7363 11.2514 17.8675 11.2514 18C11.2514 18.1325 11.2777 18.2637 11.3289 18.386C11.38 18.5083 11.455 18.6191 11.5493 18.7122C11.6437 18.8052 11.7556 18.8786 11.8786 18.928C12.0016 18.9774 12.1331 19.0019 12.2656 19H19.2539C19.3864 19.0019 19.518 18.9774 19.641 18.928C19.7639 18.8786 19.8759 18.8052 19.9702 18.7122C20.0646 18.6191 20.1395 18.5083 20.1907 18.386C20.2418 18.2637 20.2682 18.1325 20.2682 18C20.2682 17.8675 20.2418 17.7363 20.1907 17.614C20.1395 17.4918 20.0646 17.3809 19.9702 17.2878C19.8759 17.1948 19.7639 17.1214 19.641 17.072C19.518 17.0226 19.3864 16.9981 19.2539 17H12.2656Z"
        fill={color}
      />
    </svg>
  )
}

export default LegalIcon
import { SvgIcon, SvgIconProps, Tooltip } from "@mui/material";

import { palette } from "@valculator/theme";

import { maxItemLevels } from "@valculator/data";

const iconBaseColor = palette.info.light;
const levelHighlightColor = palette.secondary.light;
const textColor = palette.primary.dark;

export const LevelIconIndicator = ({
  level,
  name,
  ...props
}: SvgIconProps & {
  level: number;
  name: string;
}) => {
  const maxLevel = maxItemLevels[name] === level;

  return (
    <Tooltip title={`level:  ${level} / ${maxItemLevels[name]}`}>
      <SvgIcon
        fontSize="large"
        {...props}
        sx={{ color: maxLevel ? levelHighlightColor : iconBaseColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.75348 17.0465L5.17945 12.3609C5.19265 12.2156 5.14576 12.0712 5.04968 11.9614L2.08604 8.57438C1.81328 8.26265 1.98448 7.77254 2.39201 7.69845L7.08517 6.84514C7.24235 6.81657 7.37843 6.71904 7.456 6.57939L9.53347 2.83923C9.73664 2.47345 10.2627 2.4734 10.4659 2.83915L12.5442 6.57945C12.6218 6.71907 12.7579 6.81656 12.915 6.84513L17.6082 7.69845C18.0158 7.77254 18.187 8.26265 17.9142 8.57438L14.9506 11.9614C14.8545 12.0712 14.8076 12.2156 14.8208 12.3609L15.2468 17.0465C15.2846 17.4627 14.8509 17.7587 14.4771 17.5718L10.2386 15.4526C10.0885 15.3775 9.91176 15.3775 9.76162 15.4526L5.52313 17.5718C5.14938 17.7587 4.71565 17.4627 4.75348 17.0465Z"
          />

          <text
            x="10"
            y="12"
            fontSize={"7.5px"}
            color={textColor}
            fontWeight={900}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {level}
          </text>
        </svg>
      </SvgIcon>
    </Tooltip>
  );
};

export const WeightIconIndicator = ({
  weight,
  ...props
}: SvgIconProps & { weight?: number }) => {
  return (
    <Tooltip title={`weight:  ${weight}`}>
      <SvgIcon fontSize="large" {...props} sx={{ color: iconBaseColor }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0046 5.51697C13.0067 5.46995 13.0078 5.42263 13.0078 5.37504C13.0078 3.7872 11.8011 2.5 10.3125 2.5C8.82392 2.5 7.61719 3.7872 7.61719 5.37504C7.61719 5.42263 7.61827 5.46995 7.62041 5.51697H4.5625L3.125 16.8751H17.5L16.0625 5.51697H13.0046Z"
          />
          {weight && (
            <text
              x="10"
              y="12"
              fontSize={"7.5px"}
              color={textColor}
              fontWeight={900}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {weight}
            </text>
          )}
        </svg>
      </SvgIcon>
    </Tooltip>
  );
};

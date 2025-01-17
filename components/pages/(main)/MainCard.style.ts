'use client'
import { neutralColor } from '@/styles/theme/colors'
import { Card, css, styled } from '@mui/material'

const MUI_AVATAR_ROOT = 24

const StyledMainCard = styled(Card)(
  ({ theme }) => css`
    width: 100%;
    transition: border-color 0.3s, box-shadow 0.3s;
    border: 1px solid ${neutralColor.white2}; // #F7F5F9
    border-radius: 12px;

    &:hover {
      box-shadow: 0px 4px 16px ${neutralColor.white3}; // #ECE9F1
    }

    .card-contents {
      padding: 16px;

      .card {
        margin-bottom: 16px;

        &.title {
          font-size: 18px;
        }

        &.contents {
          font-size: 14px;
          a {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            font-size: 14px;
          }
        }

        .anchor-under {
          &:hover {
            text-decoration: underline;
          }
        }
      }

      .MuiAvatar-root {
        width: ${MUI_AVATAR_ROOT}px;
        height: ${MUI_AVATAR_ROOT}px;
        margin-right: 8px;
      }
      .MuiTypography-root {
        font-size: 12px;
        color: ${neutralColor.dark1}; // #D0C9D6
      }
    }

    .card-footer {
      padding: 12px;
      padding-bottom: 12px !important;
      border-top: 1px solid ${neutralColor.white3}; // #ECE9F1

      .card-time {
        font-size: 14px;
        .MuiSvgIcon-root {
          margin-top: 2px;
        }

        .minute {
          margin-left: 4px;
          margin-right: 4px;
        }

        .hours {
          margin-left: 4px;
        }
      }

      .card-icon {
        .chat-icon,
        .share-icon {
          margin-right: 8px;
        }
      }
    }
  `
)

export default StyledMainCard

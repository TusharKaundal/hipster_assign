import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import type { ThemeConfig } from "../types/Type";
import styled from "styled-components";

interface StyledProps {
  theme: ThemeConfig;
}

const SocialLinkStyled = styled.div<StyledProps>(({ theme }) => ({
  background: `${theme.colors.primary}25`,
  transition: theme.transition,
  "&:hover": {
    background: `${theme.colors.primary}40`,
  },
}));

/**
 * ContactPage Component
 *
 * Contact page component with theme-able styling and details of contact with animations
 *
 * @component
 * @example
 * ```tsx
 * <ContactPage />
 * ```
 * @returns {JSX.Element} The contact page component
 */

const ContactPage = () => {
  const { themeConfig } = useTheme();
  return (
    <div
      className="w-full h-full overflow-y-auto p-4 animate-translateUp"
      style={{
        background: themeConfig.colors.background,
        color: themeConfig.colors.textSecondary,
        transition: themeConfig.transition,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-5">
          <div
            className="mx-auto flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{
              background: `${themeConfig.colors.primary}20`,
              transition: themeConfig.transition,
            }}
          >
            <MessageCircle
              size={32}
              style={{
                color: themeConfig.colors.primary,
                transition: themeConfig.transition,
              }}
              className={
                themeConfig.name === "theme3" ? "hover:animate-spin" : ""
              }
            />
          </div>
          <h1
            className="text-4xl font-medium mb-4"
            style={{ transition: themeConfig.transition }}
          >
            Contact Us
          </h1>
          <p
            className="text-xl font-medium"
            style={{
              color: themeConfig.colors.textSecondary,
              transition: themeConfig.transition,
            }}
          >
            We'd love to hear from you! Get in touch with us.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10"
          style={{
            color: themeConfig.colors.textPrimary,
            transition: themeConfig.transition,
          }}
        >
          <div
            className="p-6 rounded-xl border"
            style={{
              background: themeConfig.colors.surface,
              borderColor: themeConfig.colors.border,
              transition: themeConfig.transition,
            }}
          >
            <div className="flex items-center mb-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{
                  background: `${themeConfig.colors.primary}20`,
                  transition: themeConfig.transition,
                }}
              >
                <Mail
                  size={24}
                  style={{
                    color: themeConfig.colors.primary,
                    transition: themeConfig.transition,
                  }}
                  className={`hover:cursor-pointer ${themeConfig.name === "theme3" ? "hover:animate-spin" : ""
                    }`}
                />
              </div>
              <h2 className="text-xl font-semibold">Email Us</h2>
            </div>
            <p className="md:text-lg mb-2 break-words">
              kaundaltushar@gmail.com
            </p>
          </div>

          <div
            className="p-6 rounded-xl border"
            style={{
              background: themeConfig.colors.surface,
              borderColor: themeConfig.colors.border,
              transition: themeConfig.transition,
            }}
          >
            <div className="flex items-center mb-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{
                  background: `${themeConfig.colors.primary}20`,
                  transition: themeConfig.transition,
                }}
              >
                <Phone
                  size={24}
                  style={{
                    color: themeConfig.colors.primary,
                    transition: themeConfig.transition,
                  }}
                  className={`hover:cursor-pointer ${themeConfig.name === "theme3" ? "hover:animate-spin" : ""
                    }`}
                />
              </div>
              <h2 className="text-xl font-semibold">Call Us</h2>
            </div>
            <p className="md:text-lg mb-2">+91 852-725-3010</p>
          </div>

          <div
            className="p-6 rounded-xl border"
            style={{
              background: themeConfig.colors.surface,
              borderColor: themeConfig.colors.border,
              transition: themeConfig.transition,
            }}
          >
            <div className="flex items-center mb-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{
                  background: `${themeConfig.colors.primary}20`,
                  transition: themeConfig.transition,
                }}
              >
                <MapPin
                  size={24}
                  style={{
                    color: themeConfig.colors.primary,
                    transition: themeConfig.transition,
                  }}
                  className={`hover:cursor-pointer ${themeConfig.name === "theme3" ? "hover:animate-spin" : ""
                    }`}
                />
              </div>
              <h2
                className="text-xl font-semibold"
                style={{ transition: themeConfig.transition }}
              >
                Visit Us
              </h2>
            </div>
            <p className="md:text-lg">
              123 Main Street
              <br />
              City, State 12345
              <br />
              Country
            </p>
          </div>
        </div>

        <div
          className="p-6 rounded-xl border"
          style={{
            background: themeConfig.colors.surface,
            borderColor: themeConfig.colors.border,
            color: themeConfig.colors.primary,
            transition: themeConfig.transition,
          }}
        >
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
              style={{
                background: `${themeConfig.colors.primary}20`,
                transition: themeConfig.transition,
              }}
            >
              <Send
                size={24}
                style={{
                  color: themeConfig.colors.primary,
                  transition: themeConfig.transition,
                }}
                className={`hover:cursor-pointer ${themeConfig.name === "theme3" ? "hover:animate-spin" : ""
                  }`}
              />
            </div>
            <h2 className="text-2xl font-semibold">Follow Us</h2>
          </div>
          <div className="space-y-4">
            <SocialLinkStyled
              className="flex items-center p-3 rounded-lg transition-all cursor-pointer flex-wrap"
              theme={themeConfig}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                style={{
                  background: `${themeConfig.colors.primary}20`,
                  transition: themeConfig.transition,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: themeConfig.colors.primary,
                    transition: themeConfig.transition,
                  }}
                  className={`hover:cursor-pointer w-4 sm:w-6 ${themeConfig.name === "theme3" ? "hover:animate-spin" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <a
                href="https://www.linkedin.com/in/tushar-kaundal-9a2536170"
                target="_blank"
              >
                <p className="font-medium">LinkedIn</p>
                <p
                  className="text-sm"
                  style={{
                    color: themeConfig.colors.textPrimary,
                    transition: themeConfig.transition,
                  }}
                >
                  @tusharkaundal
                </p>
              </a>
            </SocialLinkStyled>

            <SocialLinkStyled
              className="flex items-center p-3 rounded-lg transition-all cursor-pointer flex-wrap"
              theme={themeConfig}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                style={{
                  background: `${themeConfig.colors.primary}20`,
                  transition: themeConfig.transition,
                }}
              >
                <svg
                  style={{
                    color: themeConfig.colors.primary,
                    transition: themeConfig.transition,
                  }}
                  className={`hover:cursor-pointer w-4 sm:w-6 ${themeConfig.name === "theme3" ? "hover:animate-spin" : ""
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7.91 0C4.27.65 3.09 1 3.09 1A5.07 5.07 0 0 0 3 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 21.13V25" />
                </svg>
              </div>
              <a href="https://github.com/TusharKaundal" target="_blank">
                <p className="font-medium">GitHub</p>
                <p
                  className="text-sm"
                  style={{
                    color: themeConfig.colors.textPrimary,
                    transition: themeConfig.transition,
                  }}
                >
                  @TusharKaundal
                </p>
              </a>
            </SocialLinkStyled>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

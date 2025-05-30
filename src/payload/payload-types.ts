/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    Reviews: Review;
    posts: Post;
    projects: Project;
    media: Media;
    categories: Category;
    users: User;
    comments: Comment;
    redirects: Redirect;
    forms: Form;
    'form-submissions': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
export interface Page {
  id: string;
  title: string;
  publishedAt?: string | null;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            MiniCategories?: (string | Category)[] | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                MiniCategories?: (string | Category)[] | null;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        mediaContentFields?: {
          MoreImages?:
            | {
                Images?: {
                  type?: ('TwoImages' | 'ThreeImages' | 'FourImages') | null;
                  TwoImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                  TrippleImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                  FourImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                };
                id?: string | null;
              }[]
            | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'DoubleMediaContent';
      }
    | {
        invertBackground?: boolean | null;
        mediaPosition?: ('left' | 'right') | null;
        richText: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'contentMedia';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                MiniCategories?: (string | Category)[] | null;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
    | {
        form: string | Form;
        enableIntro?: boolean | null;
        introContent: {
          [k: string]: unknown;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'formBlock';
      }
  )[];
  slug?: string | null;
  HighlightImages?:
    | {
        media: string | Media;
        title: string;
        id?: string | null;
      }[]
    | null;
  Categories?: (string | Category)[] | null;
  Accordion?:
    | {
        Heading: string;
        Description: string;
        id?: string | null;
      }[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Media {
  id: string;
  alt?: string | null;
  imagekit?: {
    fileId?: string | null;
    thumbnailUrl?: string | null;
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Category {
  id: string;
  title: string;
  media?: string | Media | null;
  reference?: {
    relationTo: 'projects';
    value: string | Project;
  } | null;
  CustomUrl?: string | null;
  subCategories?: (string | Category)[] | null;
  parent?: (string | null) | Category;
  breadcrumbs?:
    | {
        doc?: (string | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface Project {
  id: string;
  title: string;
  Days: string;
  Price: number;
  categories?: (string | Category)[] | null;
  publishedAt?: string | null;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            MiniCategories?: (string | Category)[] | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                MiniCategories?: (string | Category)[] | null;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                MiniCategories?: (string | Category)[] | null;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
    | {
        mediaContentFields?: {
          MoreImages?:
            | {
                Images?: {
                  type?: ('TwoImages' | 'ThreeImages' | 'FourImages') | null;
                  TwoImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                  TrippleImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                  FourImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                };
                id?: string | null;
              }[]
            | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'DoubleMediaContent';
      }
    | {
        invertBackground?: boolean | null;
        mediaPosition?: ('left' | 'right') | null;
        richText: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'contentMedia';
      }
  )[];
  relatedProjects?: (string | Project)[] | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Post {
  id: string;
  title: string;
  Days: string;
  Price: number;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            MiniCategories?: (string | Category)[] | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                MiniCategories?: (string | Category)[] | null;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                MiniCategories?: (string | Category)[] | null;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
    | {
        mediaContentFields?: {
          MoreImages?:
            | {
                Images?: {
                  type?: ('TwoImages' | 'ThreeImages' | 'FourImages') | null;
                  TwoImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                  TrippleImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                  FourImages?:
                    | {
                        media: string | Media;
                        id?: string | null;
                      }[]
                    | null;
                };
                id?: string | null;
              }[]
            | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'DoubleMediaContent';
      }
    | {
        invertBackground?: boolean | null;
        mediaPosition?: ('left' | 'right') | null;
        richText: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'contentMedia';
      }
  )[];
  relatedPosts?: (string | Post)[] | null;
  slug?: string | null;
  HighlightImages?:
    | {
        media: string | Media;
        title: string;
        id?: string | null;
      }[]
    | null;
  categories?: (string | Category)[] | null;
  Itinary?:
    | {
        Heading: string;
        Description: string;
        DescriptionImages?:
          | {
              media: string | Media;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  GoodToKnowExample?:
    | {
        Heading: string;
        Description: string;
        id?: string | null;
      }[]
    | null;
  publishedAt?: string | null;
  authors?: (string | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Form {
  id: string;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'country';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'state';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  redirect?: {
    type?: ('reference' | 'custom') | null;
    reference?: {
      relationTo: 'pages';
      value: string | Page;
    } | null;
    url?: string | null;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface Review {
  id: string;
  user?: (string | null) | User;
  name?: string | null;
  message?: string | null;
  rating: '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '4.5' | '5';
  updatedAt: string;
  createdAt: string;
}
export interface Comment {
  id: string;
  user?: (string | null) | User;
  populatedUser?: {
    id?: string | null;
    name?: string | null;
  };
  doc?: (string | null) | Post;
  comment?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Redirect {
  id: string;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'pages';
          value: string | Page;
        } | null)
      | ({
          relationTo: 'posts';
          value: string | Post;
        } | null);
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Settings {
  id: string;
  postsPage?: (string | null) | Page;
  projectsPage?: (string | null) | Page;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          icon?: string | Media | null;
          MiniCategories?: (string | Category)[] | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Footer {
  id: string;
  copyright?: string | null;
  Categories: (string | Category)[];
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          icon?: string | Media | null;
          MiniCategories?: (string | Category)[] | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
export interface countries {
  name: {
    common: string,
    official: string,
    nativeName?: {}
  },
  tld: [
    string
  ],
  currencies: {
    EUR: {
      name: string,
      symbol: string
    }
  },
  capital: [
    string
  ],
  altSpellings: [
    string,
    string,
    string
  ],
  region: string,
  subregion: string,
  languages?: {},
  translations: {
    ara: {
      official: string,
      common: string
    },
    bre: {
      official: string,
      common: string
    },
    ces: {
      official: string,
      common: string
    },
    cym: {
      official: string,
      common: string
    },
    deu: {
      official: string,
      common: string
    },
    est: {
      official: string,
      common: string
    },
    fin: {
      official: string,
      common: string
    },
    fra: {
      official: string,
      common: string
    },
    hrv: {
      official: string,
      common: string
    },
    hun: {
      official: string,
      common: string
    },
    ita: {
      official: string,
      common: string
    },
    jpn: {
      official: string,
      common: string
    },
    kor: {
      official: string,
      common: string
    },
    nld: {
      official: string,
      common: string
    },
    per: {
      official: string,
      common: string
    },
    pol: {
      official: string,
      common: string
    },
    por: {
      official: string,
      common: string
    },
    rus: {
      official: string,
      common: string
    },
    slk: {
      official: string,
      common: string
    },
    spa: {
      official: string,
      common: string
    },
    srp: {
      official: string,
      common: string
    },
    swe: {
      official: string,
      common: string
    },
    tur: {
      official: string,
      common: string
    },
    urd: {
      official: string,
      common: string
    },
    zho: {
      official: string,
      common: string
    }
  },
  timezones: [
    string
  ],
  continents: [
    string
  ],
  flags: {
    png: string,
    svg: string,
    alt: string
  },
  coatOfArms: {
    png: string,
    svg: string
  }
}

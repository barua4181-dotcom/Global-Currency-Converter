// Global Currency Converter (standalone)
// Live rates endpoint (no API key required): https://open.er-api.com/

const CURRENCIES = [
  { code: "AED", name: "United Arab Emirates Dirham" },
  { code: "AFN", name: "Afghan Afghani" },
  { code: "ALL", name: "Albanian Lek" },
  { code: "AMD", name: "Armenian Dram" },
  { code: "ANG", name: "Netherlands Antillean Guilder" },
  { code: "AOA", name: "Angolan Kwanza" },
  { code: "ARS", name: "Argentine Peso" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "AWG", name: "Aruban Florin" },
  { code: "AZN", name: "Azerbaijani Manat" },
  { code: "BAM", name: "Bosnia and Herzegovina Convertible Mark" },
  { code: "BBD", name: "Barbadian Dollar" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "BGN", name: "Bulgarian Lev" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "BIF", name: "Burundian Franc" },
  { code: "BMD", name: "Bermudian Dollar" },
  { code: "BND", name: "Brunei Dollar" },
  { code: "BOB", name: "Bolivian Boliviano" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "BSD", name: "Bahamian Dollar" },
  { code: "BTN", name: "Bhutanese Ngultrum" },
  { code: "BWP", name: "Botswana Pula" },
  { code: "BYN", name: "Belarusian Ruble" },
  { code: "BZD", name: "Belize Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CDF", name: "Congolese Franc" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "COP", name: "Colombian Peso" },
  { code: "CRC", name: "Costa Rican Colón" },
  { code: "CUP", name: "Cuban Peso" },
  { code: "CVE", name: "Cape Verdean Escudo" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "DJF", name: "Djiboutian Franc" },
  { code: "DKK", name: "Danish Krone" },
  { code: "DOP", name: "Dominican Peso" },
  { code: "DZD", name: "Algerian Dinar" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "ERN", name: "Eritrean Nakfa" },
  { code: "ETB", name: "Ethiopian Birr" },
  { code: "EUR", name: "Euro" },
  { code: "FJD", name: "Fijian Dollar" },
  { code: "FKP", name: "Falkland Islands Pound" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "GEL", name: "Georgian Lari" },
  { code: "GGP", name: "Guernsey Pound" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "GIP", name: "Gibraltar Pound" },
  { code: "GMD", name: "Gambian Dalasi" },
  { code: "GNF", name: "Guinean Franc" },
  { code: "GTQ", name: "Guatemalan Quetzal" },
  { code: "GYD", name: "Guyanese Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "HNL", name: "Honduran Lempira" },
  { code: "HRK", name: "Croatian Kuna" },
  { code: "HTG", name: "Haitian Gourde" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "ILS", name: "Israeli New Shekel" },
  { code: "IMP", name: "Isle of Man Pound" },
  { code: "INR", name: "Indian Rupee" },
  { code: "IQD", name: "Iraqi Dinar" },
  { code: "IRR", name: "Iranian Rial" },
  { code: "ISK", name: "Icelandic Króna" },
  { code: "JEP", name: "Jersey Pound" },
  { code: "JMD", name: "Jamaican Dollar" },
  { code: "JOD", name: "Jordanian Dinar" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "KGS", name: "Kyrgyzstani Som" },
  { code: "KHR", name: "Cambodian Riel" },
  { code: "KMF", name: "Comorian Franc" },
  { code: "KPW", name: "North Korean Won" },
  { code: "KRW", name: "South Korean Won" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "KYD", name: "Cayman Islands Dollar" },
  { code: "KZT", name: "Kazakhstani Tenge" },
  { code: "LAK", name: "Lao Kip" },
  { code: "LBP", name: "Lebanese Pound" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "LRD", name: "Liberian Dollar" },
  { code: "LSL", name: "Lesotho Loti" },
  { code: "LYD", name: "Libyan Dinar" },
  { code: "MAD", name: "Moroccan Dirham" },
  { code: "MDL", name: "Moldovan Leu" },
  { code: "MGA", name: "Malagasy Ariary" },
  { code: "MKD", name: "Macedonian Denar" },
  { code: "MMK", name: "Myanmar Kyat" },
  { code: "MNT", name: "Mongolian Tögrög" },
  { code: "MOP", name: "Macanese Pataca" },
  { code: "MRU", name: "Mauritanian Ouguiya" },
  { code: "MUR", name: "Mauritian Rupee" },
  { code: "MVR", name: "Maldivian Rufiyaa" },
  { code: "MWK", name: "Malawian Kwacha" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "MZN", name: "Mozambican Metical" },
  { code: "NAD", name: "Namibian Dollar" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "NIO", name: "Nicaraguan Córdoba" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "NPR", name: "Nepalese Rupee" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "PAB", name: "Panamanian Balboa" },
  { code: "PEN", name: "Peruvian Sol" },
  { code: "PGK", name: "Papua New Guinean Kina" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "PLN", name: "Polish Złoty" },
  { code: "PYG", name: "Paraguayan Guaraní" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "RON", name: "Romanian Leu" },
  { code: "RSD", name: "Serbian Dinar" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "RWF", name: "Rwandan Franc" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "SBD", name: "Solomon Islands Dollar" },
  { code: "SCR", name: "Seychellois Rupee" },
  { code: "SDG", name: "Sudanese Pound" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "SHP", name: "Saint Helena Pound" },
  { code: "SLL", name: "Sierra Leonean Leone" },
  { code: "SOS", name: "Somali Shilling" },
  { code: "SRD", name: "Surinamese Dollar" },
  { code: "SSP", name: "South Sudanese Pound" },
  { code: "STN", name: "São Tomé and Príncipe Dobra" },
  { code: "SYP", name: "Syrian Pound" },
  { code: "SZL", name: "Eswatini Lilangeni" },
  { code: "THB", name: "Thai Baht" },
  { code: "TJS", name: "Tajikistani Somoni" },
  { code: "TMT", name: "Turkmenistani Manat" },
  { code: "TND", name: "Tunisian Dinar" },
  { code: "TOP", name: "Tongan Paʻanga" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "TTD", name: "Trinidad and Tobago Dollar" },
  { code: "TWD", name: "New Taiwan Dollar" },
  { code: "TZS", name: "Tanzanian Shilling" },
  { code: "UAH", name: "Ukrainian Hryvnia" },
  { code: "UGX", name: "Ugandan Shilling" },
  { code: "USD", name: "United States Dollar" },
  { code: "UYU", name: "Uruguayan Peso" },
  { code: "UZS", name: "Uzbekistani Soʻm" },
  { code: "VES", name: "Venezuelan Bolívar" },
  { code: "VND", name: "Vietnamese Đồng" },
  { code: "VUV", name: "Vanuatu Vatu" },
  { code: "WST", name: "Samoan Tālā" },
  { code: "XAF", name: "Central African CFA Franc" },
  { code: "XCD", name: "East Caribbean Dollar" },
  { code: "XOF", name: "West African CFA Franc" },
  { code: "XPF", name: "CFP Franc" },
  { code: "YER", name: "Yemeni Rial" },
  { code: "ZAR", name: "South African Rand" },
  { code: "ZMW", name: "Zambian Kwacha" },
  { code: "ZWL", name: "Zimbabwean Dollar" }
];

// --- DOM
const elAmount = document.getElementById("amount");
const elFromSearch = document.getElementById("fromSearch");
const elToSearch = document.getElementById("toSearch");
const elFrom = document.getElementById("fromCurrency");
const elTo = document.getElementById("toCurrency");

const elResultValue = document.getElementById("resultValue");
const elResultDetails = document.getElementById("resultDetails");
const elStatus = document.getElementById("statusText");

const elConvert = document.getElementById("convertBtn");
const elSwap = document.getElementById("swapBtn");
const elClear = document.getElementById("clearBtn");

document.getElementById("year").textContent = String(new Date().getFullYear());
document.getElementById("currencyCount").textContent = `${CURRENCIES.length}+ currencies available`;

// --- Rates cache
const ratesCache = new Map(); // base -> { fetchedAt, rates }
const CACHE_MS = 30 * 60 * 1000;

function setStatus(msg) {
  elStatus.textContent = msg || "";
}

function formatNumber(n) {
  return Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function findCurrency(code) {
  return CURRENCIES.find(c => c.code === code);
}

function optionLabel(c) {
  return `${c.code} — ${c.name}`;
}

function renderSelect(selectEl, filterText, selectedCode) {
  const q = (filterText || "").trim().toLowerCase();
  const filtered = q
    ? CURRENCIES.filter(c => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q))
    : CURRENCIES;

  selectEl.innerHTML = "";
  for (const c of filtered) {
    const opt = document.createElement("option");
    opt.value = c.code;
    opt.textContent = optionLabel(c);
    selectEl.appendChild(opt);
  }

  // Keep selection if possible
  const canKeep = filtered.some(c => c.code === selectedCode);
  if (canKeep) selectEl.value = selectedCode;
  else if (filtered.length) selectEl.value = filtered[0].code;
}

async function fetchRates(base) {
  const cached = ratesCache.get(base);
  if (cached && Date.now() - cached.fetchedAt < CACHE_MS) return cached.rates;

  const url = `https://open.er-api.com/v6/latest/${encodeURIComponent(base)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Rate request failed (${res.status})`);

  const data = await res.json();
  if (data?.result !== "success" || !data?.rates) throw new Error("Rate data not available");

  ratesCache.set(base, { fetchedAt: Date.now(), rates: data.rates });
  return data.rates;
}

function setPlaceholderResult() {
  elResultValue.textContent = "0.00";
  elResultDetails.textContent = "Enter an amount and click Convert.";
}

async function convert() {
  const amount = parseFloat(elAmount.value);
  const from = elFrom.value;
  const to = elTo.value;

  if (!Number.isFinite(amount) || amount <= 0) {
    setStatus("Please enter a valid amount (greater than 0).");
    setPlaceholderResult();
    return;
  }

  try {
    setStatus("Converting…");
    const rates = await fetchRates(from);
    const rate = rates[to];

    if (!Number.isFinite(rate)) {
      setStatus(`Sorry, no live rate found for ${from} → ${to}. Try another currency.`);
      setPlaceholderResult();
      return;
    }

    const converted = amount * rate;

    elResultValue.textContent = formatNumber(converted);
    const fromName = findCurrency(from)?.name || from;
    const toName = findCurrency(to)?.name || to;

    elResultDetails.textContent = `${formatNumber(amount)} ${from} (${fromName}) = ${formatNumber(converted)} ${to} (${toName})`;

    setStatus("Done.");
  } catch (err) {
    setStatus(`Network error: ${err?.message || "Could not fetch live rates"}`);
    setPlaceholderResult();
  }
}

function swap() {
  const a = elFrom.value;
  elFrom.value = elTo.value;
  elTo.value = a;
  setStatus("Swapped. Click Convert.");
  setPlaceholderResult();
}

function clearAll() {
  elAmount.value = "";
  elFromSearch.value = "";
  elToSearch.value = "";

  // Default selection
  renderSelect(elFrom, "", "USD");
  renderSelect(elTo, "", "EUR");

  setStatus("Cleared.");
  setPlaceholderResult();
}

function init() {
  renderSelect(elFrom, "", "USD");
  renderSelect(elTo, "", "EUR");
  setPlaceholderResult();
  setStatus("");

  elFromSearch.addEventListener("input", () => renderSelect(elFrom, elFromSearch.value, elFrom.value));
  elToSearch.addEventListener("input", () => renderSelect(elTo, elToSearch.value, elTo.value));

  elConvert.addEventListener("click", convert);
  elSwap.addEventListener("click", swap);
  elClear.addEventListener("click", clearAll);

  // Convert on Enter
  elAmount.addEventListener("keydown", (e) => {
    if (e.key === "Enter") convert();
  });
}

init();

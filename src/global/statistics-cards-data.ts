import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  BuildingStorefrontIcon
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Movimentações de hoje",
    value: "R$ 1.700,00",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "do que na semana passada",
    },
  },
  {
    color: "pink",
    icon: UserPlusIcon,
    title: "Novos clientes hoje",
    value: "35",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "do que no mês passado",
    },
  },
  {
    color: "green",
    icon: UserIcon,
    title: "Novos estabelecimentos hoje",
    value: "12",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "do que na semana passada",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "--",
    value: "--",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "--",
    },
  },
];

export default statisticsCardsData;

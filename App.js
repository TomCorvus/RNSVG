import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const xml = `
<svg width="101" height="64" viewBox="0 0 101 64" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dii_2073_81604)">
        <circle cx="22" cy="40" r="16" fill="#2D2A47"/>
    </g>
    <path d="M15.981 38.7354C15.981 35.7043 18.4737 33.2471 21.5048 33.2471V33.2471V38.7354H15.981V38.7354Z" fill="#76EBE4"/>
    <path d="M27.9821 45.1445C27.9821 42.1134 25.4893 39.6562 22.4583 39.6562V39.6562V45.1445H27.9821V45.1445Z" fill="#C2A5F9"/>
    <path d="M21.5048 42.4004C21.5048 40.8848 20.2584 39.6562 18.7429 39.6562V39.6562C17.2273 39.6562 15.981 40.8848 15.981 42.4004V42.4004C15.981 43.9159 17.2273 45.1445 18.7429 45.1445V45.1445C20.2584 45.1445 21.5048 43.9159 21.5048 42.4004V42.4004Z" fill="#FFE5A2"/>
    <path d="M27.9821 33.2471C27.9821 36.2782 25.4893 38.7354 22.4583 38.7354V38.7354V33.2471H27.9821V33.2471Z" fill="white"/>
    <g filter="url(#filter1_dii_2073_81604)">
        <ellipse cx="34" cy="23.9999" rx="15.7652" ry="15.7653" transform="rotate(-0.859634 34 23.9999)" fill="url(#paint0_linear_2073_81604)"/>
    </g>
    <g clip-path="url(#clip0_2073_81604)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3153 23.3517C31.3055 23.2399 29.4088 22.3873 27.9929 20.959C26.5676 19.5293 25.7198 17.6257 25.6115 15.6116C27.6213 15.7233 29.518 16.5759 30.9338 18.0041C32.3588 19.4341 33.2065 21.3377 33.3153 23.3517ZM34.2152 23.3517C34.3241 21.3377 35.1718 19.4341 36.5967 18.0041C38.0126 16.5759 39.9093 15.7233 41.9191 15.6116C41.8107 17.6257 40.9629 19.5293 39.5376 20.959C38.1217 22.3873 36.2251 23.2399 34.2152 23.3517ZM34.2152 24.1782C36.2251 24.29 38.1217 25.1426 39.5376 26.5709C40.9629 28.0006 41.8107 29.9043 41.9191 31.9184C39.9093 31.8067 38.0126 30.954 36.5967 29.5258C35.1718 28.0958 34.3241 26.1923 34.2152 24.1782ZM33.3431 24.1782C33.2342 26.1923 32.3588 28.0967 30.9338 29.5267C29.518 30.9549 27.6213 31.8075 25.6115 31.9192C25.7198 29.9051 26.5676 28.0014 27.9929 26.5718C29.4088 25.1435 31.3332 24.29 33.3431 24.1782Z" fill="#333333"/>
    </g>
    <defs>
        <filter id="filter0_dii_2073_81604" x="-6.9521" y="7.17043" width="77.3333" height="77.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="9.71456" dy="5.8371"/>
            <feGaussianBlur stdDeviation="11.3333"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0807843 0 0 0 0 0.0894118 0 0 0 0 0.179608 0 0 0 0.11 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2073_81604"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2073_81604" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="3.02231" dy="1.81599"/>
            <feGaussianBlur stdDeviation="1.76296"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.36904 0 0 0 0 0.352504 0 0 0 0 0.512355 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2073_81604"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-3.02231" dy="-1.81599"/>
            <feGaussianBlur stdDeviation="1.76296"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.110733 0 0 0 0 0.102373 0 0 0 0 0.183189 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_2073_81604" result="effect3_innerShadow_2073_81604"/>
        </filter>
        <filter id="filter1_dii_2073_81604" x="-32.4319" y="-17.0987" width="132.864" height="132.864" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="25.3333"/>
            <feGaussianBlur stdDeviation="25.3333"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.658542 0 0 0 0 0.6612 0 0 0 0 0.725 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2073_81604"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2073_81604" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8.44444"/>
            <feGaussianBlur stdDeviation="4.22222"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.975 0 0 0 0 0.975 0 0 0 0 0.975 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2073_81604"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-8.44444"/>
            <feGaussianBlur stdDeviation="4.22222"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.908333 0 0 0 0 0.896979 0 0 0 0 0.896979 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_2073_81604" result="effect3_innerShadow_2073_81604"/>
        </filter>
        <linearGradient id="paint0_linear_2073_81604" x1="34" y1="8.2346" x2="34" y2="39.7651" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#EFEFEF"/>
        </linearGradient>
        <clipPath id="clip0_2073_81604">
            <rect width="16.4507" height="16.4507" fill="white" transform="translate(25.5399 15.54)"/>
        </clipPath>
    </defs>
</svg>
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <SvgXml xml={xml} width="101" height="64" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

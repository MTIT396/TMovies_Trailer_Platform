"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="font-inter bg-layout border-t border-white/10 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Info */}
          <div>
            <Logo />
            <p className="text-sm text-gray-400 leading-relaxed mt-6">
              Xem phim trực tuyến chất lượng cao, không quảng cáo, tốc độ nhanh.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="bg-linear-to-br from-primary to-[#ffecba] bg-clip-text text-transparent font-semibold mb-3">
              Khám phá
            </h3>
            <ul className="space-y-2 text-sm">
              {/* just ui */}
              <li>
                <Link href="/" className="hover:text-white transition">
                  Phim lẻ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Phim bộ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Thịnh hành
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Top Rating
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="bg-linear-to-br from-primary to-[#ffecba] bg-clip-text text-transparent font-semibold mb-3">
              Hỗ trợ
            </h3>
            {/* just ui */}
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Điều khoản dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="bg-linear-to-br from-primary to-[#ffecba] bg-clip-text text-transparent font-semibold mb-3">
              Kết nối
            </h3>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} minhthien™. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

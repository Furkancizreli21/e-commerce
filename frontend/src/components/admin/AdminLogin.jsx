import React, { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        if (password !== confirmPassword) {
          alert("Şifreler uyuşmuyor!");
          return;
        }

        const res = await axios.post("http://localhost:5000/api/admin/register", {
          email,
          password,
        });
        alert(res.data.msg);
        setIsRegister(false); // Kayıt sonrası login formuna geç
      } else {
        const res = await axios.post("http://localhost:5000/api/admin/login", {
          email,
          password,
        });
        alert(res.data.msg);
        // Burada token varsa localStorage.setItem("token", res.data.token) eklenebilir
      }
    } catch (err) {
      if (err.response) {
        alert(err.response.data.msg);
      } else {
        console.error(err);
        alert("Sunucu hatası");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 p-8 text-gray-100">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-gray-50">
          {isRegister ? "Admin Kayıt" : "Admin Giriş"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium tracking-wider text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              placeholder="admin@ornek.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium tracking-wider text-gray-300">Şifre</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-amber-400"
              >
                {showPassword ? "Gizle" : "Göster"}
              </button>
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block mb-2 text-sm font-medium tracking-wider text-gray-300">Şifre Tekrar</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-amber-600 to-yellow-500 rounded-xl font-bold text-lg text-gray-900 hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            {isRegister ? "Kayıt Ol" : "Giriş Yap"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={() => setIsRegister(!isRegister)} className="text-amber-400 hover:text-amber-300 text-sm">
            {isRegister ? "Zaten hesabın var mı? Giriş yap" : "Hesabın yok mu? Kayıt ol"}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>© 2025 E-Commerce Admin Panel</p>
        </div>
      </div>
    </div>
  );
}

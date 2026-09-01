// Outlet.jsx
// ==========================================
// Standalone "Drive With TLS" page — driver / owner-operator /
// MC lease equipment application flow, split out of Careers.jsx.
// Mount this at whatever route your "Drive With TLS" hero button
// in Careers.jsx points to (e.g. /drive-with-tls).
// ==========================================

import React, { useState } from "react";

import {
    FaTimes,
    FaArrowRight,
    FaArrowLeft,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaLockOpen,
    FaUndoAlt,
    FaShieldAlt,
    FaIdCard,
    FaTruck,
    FaUser,
    FaBuilding,
    FaHome,
    FaMap,
    FaCalendarAlt,
    FaRulerCombined,
    FaTools,
    FaCheckCircle,
    FaBriefcase,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";


// ==========================================
// COMPANY CONTACT INFO
// ==========================================

const COMPANY_PHONE_DISPLAY = "+1 (407) 205-9059";
const COMPANY_PHONE_TEL = "+1 (407) 205-9059";
const COMPANY_EMAIL = "business@transnova.solutions";
const COMPANY_LOCATION = "Shorkot Jhang";


// ==========================================
// SHARED CLASS TOKENS (medium, animated inputs/buttons)
// ==========================================

const INPUT_CLS =
    "peer w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3 rounded-xl " +
    "focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:scale-[1.01] " +
    "hover:border-[#454545] transition-all duration-200 placeholder:text-[#555555]";

const SELECT_CLS =
    "peer w-full bg-[#181818] border border-[#303030] text-white text-sm px-4 py-3 rounded-xl " +
    "focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:scale-[1.01] " +
    "hover:border-[#454545] transition-all duration-200 cursor-pointer";

const BTN_PRIMARY =
    "bg-[#FF6B35] text-black font-semibold text-sm py-3 rounded-xl hover:bg-[#B8960C] " +
    "hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-md shadow-amber-500/20 " +
    "flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100";

const BTN_SECONDARY =
    "bg-[#181818] border border-[#303030] text-white font-semibold text-sm py-3 rounded-xl " +
    "hover:border-[#FF6B35] hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 " +
    "flex items-center justify-center gap-2 cursor-pointer";

const BTN_PRIMARY_SM =
    "bg-[#FF6B35] text-black font-semibold text-xs py-2.5 px-5 rounded-lg hover:bg-[#B8960C] " +
    "hover:scale-[1.03] active:scale-[0.96] transition-all duration-200 shadow-md shadow-amber-500/20 " +
    "flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100";


// ==========================================
// DRIVER & EQUIPMENT — STATIC OPTIONS
// ==========================================

const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming",
];

const truckTypes = [
    "Dry Van", "Reefer", "Flatbed", "Step Deck", "Power Only",
    "Box Truck", "Sprinter Van", "Tanker", "Conestoga",
];

const trailerLengths = [
    "26 ft", "28 ft", "40 ft", "45 ft", "48 ft", "53 ft",
];

const accessoriesList = [
    "Liftgate", "Pallet Jack", "Straps", "Chains", "Tarps", "Ramps",
    "E-Track", "Load Bars", "Refrigeration Unit", "Team Drivers",
    "Hazmat Certified",
];


// ==========================================
// OUTLET COMPONENT — "DRIVE WITH TLS"
// ==========================================

const Outlet = () => {

    // ==========================================
    // STATES — DRIVER & EQUIPMENT SECTION
    // ==========================================

    const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
    const [driverStep, setDriverStep] = useState(1);
    const [operatorType, setOperatorType] = useState("");
    const [accessories, setAccessories] = useState([]);
    const [isDriverSubmitting, setIsDriverSubmitting] = useState(false);
    const [isDriverSuccessOpen, setIsDriverSuccessOpen] = useState(false);

    const [toast, setToast] = useState({ show: false, message: "", type: "", icon: "" });


    // ==========================================
    // TOAST
    // ==========================================

    const showToast = (message, type = "success", icon = "✅") => {
        setToast({ show: true, message, type, icon });
        setTimeout(() => setToast({ show: false, message: "", type: "", icon: "" }), 5000);
    };


    // ==========================================
    // OPEN / CLOSE — DRIVER & EQUIPMENT MODAL
    // ==========================================

    const openDriverModal = () => {
        setDriverStep(1);
        setOperatorType("");
        setAccessories([]);
        setIsDriverModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeDriverModal = () => {
        setIsDriverModalOpen(false);
        document.body.style.overflow = "auto";
    };

    const toggleAccessory = (item) => {
        setAccessories((prev) => (prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]));
    };

    const resetDriverForm = () => {
        setDriverStep(1);
        setOperatorType("");
        setAccessories([]);
    };

    const handleDriverSubmit = async (e) => {
        e.preventDefault();
        setIsDriverSubmitting(true);

        try {
            const formData = new FormData(e.target);

            const driverData = {
                to_email: COMPANY_EMAIL,
                to_name: "Dispatch Team",
                operator_type: operatorType === "owner" ? "Owner Operator" : "MC Lease Operator",
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                company_name: formData.get("company_name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                home_address: formData.get("home_address"),
                home_state: formData.get("home_state"),
                agreement_date: formData.get("agreement_date"),
                truck_type: formData.get("truck_type"),
                trailer_length: formData.get("trailer_length"),
                accessories: accessories.join(", ") || "None selected",
                applied_date: new Date().toLocaleString("en-US", {
                    weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
                }),
            };

            const EMAILJS_SERVICE_ID = "service_mwoqwbs";
            const EMAILJS_TEMPLATE_ID = "template_zb04utt";
            const EMAILJS_PUBLIC_KEY = "hkyeEuonkAKSiQj7d";

            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, driverData, EMAILJS_PUBLIC_KEY);

            try {
                const backendResponse = await fetch("http://localhost:5000/api/save-driver-application", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(driverData),
                });
                if (!backendResponse.ok) console.warn("Backend returned an error.");
            } catch (backendError) {
                console.warn("Backend save skipped:", backendError);
            }

            closeDriverModal();
            resetDriverForm();

            showToast("Your driver application was submitted! Dispatch will reach out soon.", "success", "✅");

            setTimeout(() => {
                setIsDriverSuccessOpen(true);
                document.body.style.overflow = "hidden";
            }, 800);

        } catch (error) {
            console.error("❌ Driver submission error:", error?.text || error?.message || error);
            showToast("Submission failed. Please try again.", "error", "❌");
        } finally {
            setIsDriverSubmitting(false);
        }
    };

    const closeDriverSuccess = () => {
        setIsDriverSuccessOpen(false);
        document.body.style.overflow = "auto";
    };


    // ==========================================
    // RENDER
    // ==========================================

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-manrope pb-16 overflow-x-hidden">

            {/* ==========================================
          TOAST
      ========================================== */}
            {toast.show && (
                <div
                    className={`fixed top-5 left-1/2 -translate-x-1/2 z-[999999] w-[calc(100%-30px)] max-w-md px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-slideDown ${toast.type === "success" ? "bg-[#111111] border-2 border-[#FF6B35]" : "bg-[#111111] border-2 border-red-500"
                        }`}
                >
                    <span className="text-2xl">{toast.icon}</span>
                    <span className="text-white font-medium text-sm flex-1">{toast.message}</span>
                    <button
                        onClick={() => setToast({ show: false, message: "", type: "", icon: "" })}
                        className="text-white/50 hover:text-white hover:scale-110 active:scale-90 transition-all duration-150"
                    >
                        <FaTimes />
                    </button>
                </div>
            )}

            {/* ==========================================
          DRIVE WITH TLS — HERO
      ========================================== */}
            <section className="pt-16 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-10 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center shadow-xl">
                    <div className="w-full lg:w-3/5 space-y-5">
                        <p className="text-[#FF6B35] font-medium text-sm tracking-[3px] uppercase animate-slideInLeft">
                            Owner Operators & MC Lease
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-slideInLeft">
                            Drive With <span className="text-white">TRANS</span>
                            <span className="text-[#FF6B35]">NOVA</span>
                        </h1>
                        <p className="text-[#9B9B8A] text-base leading-relaxed max-w-lg">
                            Apply once and let our dispatch team keep you loaded. No forced dispatch, no hidden
                            fees — and if you have questions at any step, we're one call away.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={openDriverModal}
                                className="inline-flex items-center gap-2 bg-[#FF6B35] text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-[#FF6B35] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                            >
                                <FaTruck className="text-xs" />
                                Apply To Drive
                                <FaArrowRight className="text-xs" />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5">
                        <img
                            src="/truck.png"
                            alt="Truck on the road"
                            className="w-full h-56 lg:h-64 object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ==========================================
          WHY DRIVE WITH US — QUICK FACTS
      ========================================== */}
            <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">
                        Why Drive With <span className="text-[#FF6B35]">Us?</span>
                    </h2>
                    <div className="w-12 h-[3px] bg-[#FF6B35] mx-auto mt-3 rounded-full"></div>
                    <p className="text-[#666666] mt-4 max-w-xl mx-auto">
                        Straightforward onboarding for owner operators and MC lease drivers alike.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a
                        href={`tel:${COMPANY_PHONE_TEL}`}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#EDEAE4] hover:border-[#FF6B35]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">
                            <FaPhone className="text-[#FF6B35] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-[#999999] text-[10px] uppercase tracking-wider font-semibold mb-1">Call Us Directly</p>
                            <p className="text-[#111111] text-sm font-medium">{COMPANY_PHONE_DISPLAY}</p>
                        </div>
                    </a>

                    <a
                        href={`mailto:${COMPANY_EMAIL}`}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#EDEAE4] hover:border-[#FF6B35]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">
                            <FaEnvelope className="text-[#FF6B35] group-hover:text-white transition-colors" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-[#999999] text-[10px] uppercase tracking-wider font-semibold mb-1">Drop Us An Email</p>
                            <p className="text-[#111111] text-sm font-medium truncate">{COMPANY_EMAIL}</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#EDEAE4]">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                            <FaMapMarkerAlt className="text-[#FF6B35]" />
                        </div>
                        <div>
                            <p className="text-[#999999] text-[10px] uppercase tracking-wider font-semibold mb-1">Our Location</p>
                            <p className="text-[#111111] text-sm font-medium">{COMPANY_LOCATION}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#EDEAE4]">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                            <FaClock className="text-[#FF6B35]" />
                        </div>
                        <div>
                            <p className="text-[#999999] text-[10px] uppercase tracking-wider font-semibold mb-1">Availability</p>
                            <p className="text-[#111111] text-sm font-medium">24 / 7 Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          DRIVE WITH TLS — DRIVER & EQUIPMENT APPLICATION MODAL
      ===================================================== */}
            {isDriverModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-5 animate-fadeIn">
                    <div className="bg-[#111111] w-[90%] max-w-[90%] max-h-[94vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#2A2A2A] animate-slideUp">

                        {/* MODAL TOP BAR */}
                        <div className="sticky top-0 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A] px-5 sm:px-8 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center">
                                    <FaBriefcase className="text-[#FF6B35]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Driver Application</p>
                                    <p className="text-[#777777] text-xs">
                                        Step {driverStep} of 2 · {driverStep === 1 ? "Operator type" : "Driver & Equipment"}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={closeDriverModal}
                                className="w-10 h-10 rounded-xl border border-[#333333] text-[#999999] hover:text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:rotate-90 flex items-center justify-center transition-all duration-300"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="flex gap-2 px-5 sm:px-8 pt-4">
                            <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${driverStep >= 1 ? "bg-[#FF6B35]" : "bg-[#2A2A2A]"}`} />
                            <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${driverStep >= 2 ? "bg-[#FF6B35]" : "bg-[#2A2A2A]"}`} />
                        </div>

                        {/* STEP 1 — OPERATOR TYPE + CONTACT PANEL */}
                        {driverStep === 1 && (
                            <div key="step1" className="grid grid-cols-1 lg:grid-cols-[320px_1fr] animate-step">
                                <div className="bg-[#181818] border-r border-[#2A2A2A] relative overflow-hidden animate-field" style={{ animationDelay: "0ms" }}>
                                    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#FF6B35]/10 blur-3xl"></div>
                                    <div className="relative z-10 p-6 sm:p-8">
                                        <h3 className="text-xl font-bold text-white mb-2">Ready to Drive With Trans Nova?</h3>
                                        <p className="text-[#888888] text-sm leading-relaxed mb-7">
                                            Apply once and let our dispatch team keep you loaded. No forced dispatch, no hidden fees —
                                            and if you have questions at any step, we're one call away.
                                        </p>

                                        <div className="space-y-3">
                                            <a
                                                href={`tel:${COMPANY_PHONE_TEL}`}
                                                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#FF6B35]/50 hover:bg-[#1C1C1C] hover:scale-[1.02] transition-all duration-300"
                                            >
                                                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">
                                                    <FaPhone className="text-[#FF6B35] group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Call Us Directly</p>
                                                    <p className="text-white text-sm">{COMPANY_PHONE_DISPLAY}</p>
                                                </div>
                                            </a>

                                            <a
                                                href={`mailto:${COMPANY_EMAIL}`}
                                                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#FF6B35]/50 hover:bg-[#1C1C1C] hover:scale-[1.02] transition-all duration-300"
                                            >
                                                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35] transition-all">
                                                    <FaEnvelope className="text-[#FF6B35] group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Drop Us An Email</p>
                                                    <p className="text-white text-sm truncate">{COMPANY_EMAIL}</p>
                                                </div>
                                            </a>

                                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A]">
                                                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                                                    <FaMapMarkerAlt className="text-[#FF6B35]" />
                                                </div>
                                                <div>
                                                    <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Our Location</p>
                                                    <p className="text-white text-sm">{COMPANY_LOCATION}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2A2A2A]">
                                                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                                                    <FaClock className="text-[#FF6B35]" />
                                                </div>
                                                <div>
                                                    <p className="text-[#666666] text-[10px] uppercase tracking-wider font-semibold mb-1">Availability</p>
                                                    <p className="text-white text-sm">24 / 7 Available</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 lg:p-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-5 animate-field" style={{ animationDelay: "60ms" }}>
                                        <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
                                        <span className="text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">Apply Now</span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-field" style={{ animationDelay: "110ms" }}>
                                    </h3>

                                    <p className="text-[#888888] text-sm mb-6 max-w-xl animate-field" style={{ animationDelay: "160ms" }}>
                                        Choose the onboarding option that best matches your operation.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 animate-field" style={{ animationDelay: "210ms" }}>
                                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#999999] bg-[#181818] border border-[#2A2A2A] rounded-full px-3 py-1.5">
                                            <FaLockOpen className="text-[#FF6B35] text-[10px]" />
                                            No commitment required
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#999999] bg-[#181818] border border-[#2A2A2A] rounded-full px-3 py-1.5">
                                            <FaUndoAlt className="text-[#FF6B35] text-[10px]" />
                                            Withdraw anytime
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#999999] bg-[#181818] border border-[#2A2A2A] rounded-full px-3 py-1.5">
                                            <FaShieldAlt className="text-[#FF6B35] text-[10px]" />
                                            100% confidential
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                        <button
                                            type="button"
                                            onClick={() => setOperatorType("owner")}
                                            className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 animate-field ${operatorType === "owner" ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                                                }`}
                                            style={{ animationDelay: "260ms" }}
                                        >
                                            <span className={`absolute top-4 right-4 w-4 h-4 rounded-full border transition-all duration-300 ${operatorType === "owner" ? "border-[#FF6B35] bg-[#FF6B35] scale-110" : "border-[#3A3A3A]"}`} />
                                            <FaIdCard className="text-[#FF6B35] text-xl mb-3" />
                                            <p className="text-white font-semibold text-base mb-1">Owner Operator</p>
                                            <p className="text-[#888888] text-xs leading-relaxed">I already have my own MC/DOT authority.</p>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setOperatorType("lease")}
                                            className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 animate-field ${operatorType === "lease" ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                                                }`}
                                            style={{ animationDelay: "310ms" }}
                                        >
                                            <span className={`absolute top-4 right-4 w-4 h-4 rounded-full border transition-all duration-300 ${operatorType === "lease" ? "border-[#FF6B35] bg-[#FF6B35] scale-110" : "border-[#3A3A3A]"}`} />
                                            <FaTruck className="text-[#FF6B35] text-xl mb-3" />
                                            <p className="text-white font-semibold text-base mb-1">MC Lease Operator</p>
                                            <p className="text-[#888888] text-xs leading-relaxed">I want to operate under TLS authority.</p>
                                        </button>
                                    </div>

                                    <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-7 animate-field" style={{ animationDelay: "360ms" }}>
                                        <FaShieldAlt className="text-green-400 mt-0.5 shrink-0 text-sm" />
                                        <p className="text-green-300 text-xs leading-relaxed">
                                            No commitment, no pressure. This application is non-binding — you can withdraw at any
                                            time before signing any agreement.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        disabled={!operatorType}
                                        onClick={() => setDriverStep(2)}
                                        className={`${BTN_PRIMARY} w-full animate-field`}
                                        style={{ animationDelay: "410ms" }}
                                    >
                                        Continue
                                        <FaArrowRight className="text-xs" />
                                    </button>

                                    <p className="text-[#555555] text-xs text-center mt-4 animate-field" style={{ animationDelay: "450ms" }}>
                                        Takes only 3 minutes · Non-binding · Cancel anytime
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* STEP 2 — DRIVER & EQUIPMENT FORM */}
                        {driverStep === 2 && (
                            <div key="step2" className="p-5 sm:p-8 lg:p-10 animate-step">
                                <div className="max-w-3xl mx-auto">
                                    <div className="mb-8 animate-field" style={{ animationDelay: "0ms" }}>
                                        <button
                                            type="button"
                                            onClick={() => setDriverStep(1)}
                                            className="inline-flex items-center gap-2 text-[#888888] hover:text-[#FF6B35] hover:-translate-x-1 text-xs font-semibold mb-5 transition-all duration-200 cursor-pointer"
                                        >
                                            <FaArrowLeft className="text-[10px]" />
                                            Back
                                        </button>

                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-4">
                                            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
                                            <span className="text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">Step 2</span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                            Driver & <span className="text-[#FF6B35]">Equipment</span>
                                        </h3>

                                        <p className="text-[#888888] text-sm mt-2 max-w-xl">
                                            Applying as{" "}
                                            <span className="text-white font-medium">
                                                {operatorType === "owner" ? "Owner Operator" : "MC Lease Operator"}
                                            </span>
                                            . Please provide your operational and contact details.
                                        </p>
                                    </div>

                                    <form onSubmit={handleDriverSubmit} className="space-y-6">
                                        <div className="animate-field" style={{ animationDelay: "60ms" }}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                                                <span className="text-[#777777] text-xs uppercase tracking-widest flex items-center gap-2">
                                                    <FaUser className="text-[#FF6B35]" />
                                                    Personal Information
                                                </span>
                                                <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        First Name<span className="text-[#FF6B35] ml-1">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <input type="text" name="first_name" required placeholder="John" className={`${INPUT_CLS} pl-11`} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        Last Name<span className="text-[#FF6B35] ml-1">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <input type="text" name="last_name" required placeholder="Smith" className={`${INPUT_CLS} pl-11`} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        Company Name<span className="text-[#FF6B35] ml-1">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <input type="text" name="company_name" required placeholder="Your LLC or DBA name" className={`${INPUT_CLS} pl-11`} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        Phone<span className="text-[#FF6B35] ml-1">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <input type="tel" name="phone" required placeholder="(555) 000-0000" className={`${INPUT_CLS} pl-11`} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                    Email Address<span className="text-[#FF6B35] ml-1">*</span>
                                                </label>
                                                <div className="relative">
                                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                    <input type="email" name="email" required placeholder="you@email.com" className={`${INPUT_CLS} pl-11`} />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                    Home Address<span className="text-[#FF6B35] ml-1">*</span>
                                                </label>
                                                <div className="relative">
                                                    <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                    <input type="text" name="home_address" required placeholder="123 Main St, City, State, ZIP" className={`${INPUT_CLS} pl-11`} />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        Home State<span className="text-[#FF6B35] ml-1">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaMap className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <select name="home_state" required className={`${SELECT_CLS} pl-11`}>
                                                            <option value="">Select state...</option>
                                                            {usStates.map((state) => (
                                                                <option key={state} value={state}>{state}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        Agreement Date<span className="text-[#FF6B35] ml-1">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <input
                                                            type="date"
                                                            name="agreement_date"
                                                            required
                                                            defaultValue={new Date().toISOString().split("T")[0]}
                                                            className={`${SELECT_CLS} pl-11`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="animate-field" style={{ animationDelay: "180ms" }}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                                                <span className="text-[#777777] text-xs uppercase tracking-widest flex items-center gap-2">
                                                    <FaTruck className="text-[#FF6B35]" />
                                                    Equipment Details
                                                </span>
                                                <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        Truck Type<span className="text-[#FF6B35] ml-1">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaTruck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <select name="truck_type" required className={`${SELECT_CLS} pl-11`}>
                                                            <option value="">Select type...</option>
                                                            {truckTypes.map((type) => (
                                                                <option key={type} value={type}>{type}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-semibold text-[#AAAAAA] mb-2">
                                                        Trailer Length
                                                    </label>
                                                    <div className="relative">
                                                        <FaRulerCombined className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none" />
                                                        <select name="trailer_length" className={`${SELECT_CLS} pl-11`}>
                                                            <option value="">Select length...</option>
                                                            {trailerLengths.map((len) => (
                                                                <option key={len} value={len}>{len}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="animate-field" style={{ animationDelay: "300ms" }}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                                                <span className="text-[#777777] text-xs uppercase tracking-widest flex items-center gap-2">
                                                    <FaTools className="text-[#FF6B35]" />
                                                    Optional Accessories
                                                </span>
                                                <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                                            </div>

                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                {accessoriesList.map((item, index) => {
                                                    const checked = accessories.includes(item);
                                                    return (
                                                        <label
                                                            key={item}
                                                            className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border cursor-pointer select-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/20 animate-field ${checked ? "bg-[#1C1C1C] border-[#FF6B35]" : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A]"
                                                                }`}
                                                            style={{ animationDelay: `${320 + index * 25}ms` }}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                name="accessories"
                                                                value={item}
                                                                checked={checked}
                                                                onChange={() => toggleAccessory(item)}
                                                                className="sr-only"
                                                            />
                                                            <span
                                                                className={`w-4 h-4 shrink-0 rounded-md border flex items-center justify-center transition-all duration-200 ${checked ? "bg-[#FF6B35] border-[#FF6B35] scale-105" : "border-[#3A3A3A] bg-transparent"
                                                                    }`}
                                                            >
                                                                <FaCheckCircle className={`text-black text-[10px] transition-all duration-200 ${checked ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
                                                            </span>
                                                            <span className={`text-xs font-medium transition-colors ${checked ? "text-white" : "text-[#999999]"}`}>{item}</span>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* hidden fields */}
                                        <input type="hidden" name="operator_type" value={operatorType} />

                                        <div className="flex flex-col sm:flex-row gap-3 animate-field" style={{ animationDelay: "450ms" }}>
                                            <button type="button" onClick={() => setDriverStep(1)} className={`${BTN_SECONDARY} sm:w-40`}>
                                                <FaArrowLeft className="text-xs" />
                                                Back
                                            </button>
                                            <button type="submit" disabled={isDriverSubmitting} className={`${BTN_PRIMARY} flex-1 py-3.5 font-bold`}>
                                                {isDriverSubmitting ? (
                                                    <>
                                                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                                        Submitting Application...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Application
                                                        <FaArrowRight />
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-center gap-2 text-[#555555] text-xs animate-field" style={{ animationDelay: "490ms" }}>
                                            <FaShieldAlt />
                                            <span>Your information is kept confidential and secure.</span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* =====================================================
          SUCCESS POPUP — DRIVER APPLICATIONS
      ===================================================== */}
            {isDriverSuccessOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 text-center relative animate-scaleUp">
                        <button
                            onClick={closeDriverSuccess}
                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F5F5] text-[#777777] hover:bg-[#FF6B35] hover:text-white hover:rotate-90 flex items-center justify-center transition-all duration-300"
                        >
                            <FaTimes />
                        </button>
                        <div className="w-24 h-24 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
                            <FaCheckCircle className="text-green-500 text-6xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#111111] mb-2">Application Submitted!</h3>
                        <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded-full mb-5"></div>
                        <p className="text-[#555555] text-base mb-6 leading-relaxed">
                            Thanks for applying to drive with TLS. Our dispatch team will review your details and reach out shortly.
                        </p>
                        <button onClick={closeDriverSuccess} className={`${BTN_PRIMARY_SM} w-full py-3`}>Got it, Thanks!</button>
                    </div>
                </div>
            )}

            {/* =====================================================
          CUSTOM CSS
      ===================================================== */}
            <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }

        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-slideUp { animation: slideUp 0.4s ease-out forwards; }

        @keyframes slideDown { from { opacity: 0; transform: translateX(-50%) translateY(-20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        .animate-slideDown { animation: slideDown 0.4s ease-out forwards; }

        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }

        @keyframes scaleUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-scaleUp { animation: scaleUp 0.4s ease-out forwards; }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 0.8s linear infinite; }

        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes stepIn { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: translateX(0); } }
        .animate-step { animation: stepIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes fieldIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-field { animation: fieldIn 0.45s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn, .animate-slideUp, .animate-slideDown,
          .animate-slideInLeft, .animate-scaleUp, .animate-step, .animate-field {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111111; }
        ::-webkit-scrollbar-thumb { background: #444444; border-radius: 20px; }
        ::-webkit-scrollbar-thumb:hover { background: #FF6B35; }

        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); cursor: pointer; }

        select option { background: #181818; color: white; }

        @media (max-width: 640px) {
          .animate-slideUp { animation-duration: 0.3s; }
        }
      `}</style>
        </div>
    );
};

export default Outlet;
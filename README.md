# Llama-Agent-AI
A web-based AI chatbot designed to answer trading and financial market queries in real-time. Built using FastAPI, Llama 3.2 / Mistral 7B (via Ollama), and a responsive frontend, this project simulates a trading assistant that educates users on swing trading strategies, technical indicators, market analysis, and risk management.

Features

Trading-Focused AI: Provides structured, educational responses about stocks, crypto, forex, and trading strategies.

Agent Memory: Remembers recent conversation history for contextual responses.

Floating Chatbot UI: Clickable chatbot icon opens a responsive chat window, similar to ChatGPT.

Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.

Markdown Support: Preserves formatting in AI responses (bullet points, bold text, code examples).

Open-Source & Local: Runs locally using Ollama LLM, ensuring privacy and offline usage.

Tech Stack

Backend: FastAPI, Pydantic, Requests

AI Model: Llama 3.2 1B / Mistral 7B via Ollama

Frontend: HTML, CSS, JavaScript (floating chat UI)

Templates & Static Files: Jinja2, custom CSS/JS

How It Works

User clicks the floating chat icon to open the chat window.

Messages are sent to the FastAPI backend.

The AI generates trading-focused responses using the local LLM.

Responses are displayed in the chat window with proper formatting.

Recent chat history is stored for contextual follow-ups.

Ideal For

Trading enthusiasts and learners

Educational platforms for stock/crypto strategies

Developers experimenting with LLM-powered chatbots

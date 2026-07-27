# Kyungtae Hwang — Full-Stack & AI Systems Engineer

**Location**: Seoul, South Korea  
**Contact**: (+82) 010-8979-8506 | hwanghkt@naver.com  
**Links**: [GitHub](https://github.com/kanziman) | [Portfolio](file:///c:/Users/acrof/DEV/brand-design/portfolio.html) | [Resume](file:///c:/Users/acrof/DEV/brand-design/resume.html)

---

## Executive Summary

Self-directed Full-Stack & AI Systems Engineer with **5 years of experience** building resilient backend architectures, high-throughput data pipelines, and production-grade Agentic AI systems. Proactively identifies systemic bottlenecks, engineers custom verification harnesses, and automates end-to-end workflows to ensure **100% test-verified code delivery**. Proven track record in designing 1M+ daily transaction scraping pipelines, real-time SSE concurrency systems, and GraphRAG/LangGraph customer intelligence platforms.

---

## Core Competencies

### Self-Directed Engineering & Tooling
* **Proactive Bottleneck Resolution**: Autonomously detects operational friction and builds zero-dependency CLI utilities (e.g., `skillx-map`) and automated pipelines to eliminate manual work.
* **End-to-End Ownership**: Drives product delivery seamlessly across backend systems, design tokens (`brand-design`), automated scraping (`zettlink`), and AI agent architectures.

### Testing & AI Agent Harness Infrastructure
* **TDD & Verification Harness**: Modularizes Red-Green-Refactor TDD workflows into AI Agent skills paired with Husky and Git Hooks guardrails to guarantee zero untested code reaches production.
* **Non-Determinism Control**: Engineers custom validation hooks (Threshold Hooks) and `AskUser` (Human-in-the-Loop) approval gates to counteract LLM non-determinism and maintain business safety.
* **Dynamic Context Supply**: Architected lightweight SQLite context repositories to supply historical inspection states dynamically into LLM summary prompts.

### Backend & High-Throughput Architecture
* **Kotlin / Java / Spring Boot**: Expertise in distributed node task scheduling and load-balancing algorithms via Redis Queues.
* **High-Volume Scraping (1M+ Daily)**: Root Cause Analysis (RCA) on DB lock contention & Connection Exhaustion; optimized HikariCP connection pools and transitioned to Bulk Insert/Batch Update queries (99.9% scraping success rate).
* **Real-Time & Concurrency Control**: SSE (Server-Sent Events) unidirectional streaming with Reconnection ID session recovery and Lot/Chip test result concurrency control (50% mapping cycle reduction, 0% data loss).

### Agentic AI & Knowledge Graphs
* **Neo4j GraphRAG Engine**: Built 3-way hybrid search combining BGE-Small Dense + Lucene Sparse + Graph 1-hop via Reciprocal Rank Fusion (RRF) algorithms.
* **LangGraph Workflows**: Designed StateGraph `interrupt()` approval gates and interactive multi-step live dashboards (`channel-voc-demo`).

---

## Key Technical Case Studies

### 1. TDD Guardrails & Automated Monitoring Harness Infrastructure
* **Context**: Manual daily inspection tasks (30 min/day) and rising code complexity posed risks of untested code regressions.
* **Action**: Autonomously engineered an automated monitoring pipeline powered by SQLite context storage and LLM dynamic summaries. Built an AI-driven TDD verification harness integrated with Husky and Git Hooks.
* **Outcome**: Reduced operational monitoring overhead to zero (100% automated) and established a strict pipeline where only 100% test-verified code enters main branches.

### 2. Neo4j GraphRAG + LangGraph Autonomous VOC Remediation (`channel-voc-demo`)
* **Context**: Unstructured customer support logs (VOC) required automated root-cause detection and real-time issue remediation without LLM hallucination risks.
* **Action**: Developed a personal project ingesting support conversations into a Neo4j Knowledge Graph utilizing a 3-way hybrid GraphRAG engine (RRF). Integrated LangGraph `interrupt()` human approval gates to auto-trigger GitHub Issues and Jira tickets.
* **Outcome**: Successfully automated root-cause analysis, revenue loss estimation, and ticket dispatch with human-in-the-loop safety.

### 3. High-Throughput Financial Data Scraping Optimization (1M+ Daily Transactions)
* **Context**: High-concurrency write transaction spikes caused connection exhaustion and database lock contention across 10+ scraping nodes.
* **Action**: Conducted Root Cause Analysis (RCA), optimized HikariCP pool parameters, redesigned RDB indexes, and refactored single queries into Bulk Insert/Batch Update operations.
* **Outcome**: Dramatically reduced query latency and maintained a 99.9% scraping success rate across 100–200 financial target institutions.

---

## Career History

* **AI Product Engineer & Full-Stack Developer** | Acrofuture Co., Ltd. (*Jun 2025 – Present*)
* **Full-Stack Developer** | Freelance (*May 2023 – May 2024*)
* **Backend Developer** | Infotech Corporation Co., Ltd. (*Aug 2020 – May 2023*)

---

## Education & Certifications

* **Hongik University**: Bachelor of Business Administration (BBA)
* **AWS Certified Solutions Architect – Associate (SAA)**: Amazon Web Services

# Kyungtae Hwang — Full-Stack & AI Systems Engineer

**Location**: Seoul, South Korea  
**Contact**: (+82) 010-8979-8506 | hwanghkt@naver.com  
**Links**: [GitHub](https://github.com/kanziman) | [NexusWiki](https://github.com/kanziman/NexusWiki)

---

## Executive Summary

Full-Stack Engineer at a Hyundai AutoEver partner, developing and operating a global content platform, with **6 years of experience** building resilient backend architectures, high-throughput data pipelines, and production-grade Agentic AI systems. Proactively identifies systemic bottlenecks, engineers custom verification harnesses, and automates end-to-end workflows to ensure test-verified code delivery. Proven track record in designing 1M+ daily transaction scraping pipelines and real-time SSE concurrency systems. Also built and proposed NexusWiki, a personal team-wiki project expanding on an internal spec-document RAG query chatbot engine, with 5-channel hybrid search and Postgres RLS isolation.

---

## Core Competencies

### Self-Directed Engineering & Tooling
* **Proactive Bottleneck Resolution**: Autonomously detects operational friction and builds zero-dependency CLI utilities (e.g., `skillx-map`) and automated pipelines to eliminate manual work.
* **End-to-End Ownership**: Drives product delivery seamlessly across backend systems, automated pipelines, and AI agent architectures.

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
* **NexusWiki Hybrid Search & Tenant Isolation**: Designed a 5-channel hybrid search citing both raw sources and compiled wiki pages; enforced multi-tenant isolation with Postgres RLS (Supabase) instead of application code.
* **LangGraph Workflows**: Designed StateGraph `interrupt()` approval gates and interactive multi-step live dashboards (`channel-voc-demo`).

---

## Key Technical Case Studies

### 1. NexusWiki — LLM-Compiled Team Knowledge Workspace (SaaS)
* **Context**: Having engineered an internal spec-document RAG query chatbot engine, I recognized that teammates lacked a shared, verifiable knowledge base with traceable citations, so I built and proposed a dedicated team-wiki project.
* **Action**: Built a monorepo (FastAPI API, resident worker on Railway, Next.js 15 dashboard) where an LLM compiles sources into an interlinked wiki and a 5-channel hybrid search cites both sources and wiki. Enforced tenant isolation with Postgres RLS (Supabase) rather than application code.
* **Outcome**: Shipped SaaS features (free-credit quota, bulk YouTube transcript ingestion, public wiki publishing) across 150+ PRs. [GitHub](https://github.com/kanziman/NexusWiki)

### 2. TDD Guardrails & Automated Monitoring Harness Infrastructure
* **Context**: Manual daily inspection tasks (30 min/day) and rising code complexity posed risks of untested code regressions.
* **Action**: Autonomously engineered an automated monitoring pipeline powered by SQLite context storage and LLM dynamic summaries. Built an AI-driven TDD verification harness integrated with Husky and Git Hooks.
* **Outcome**: Reduced operational monitoring overhead to zero (fully automated) and established a strict pipeline where only test-verified code enters main branches.

### 3. Neo4j GraphRAG + LangGraph Autonomous VOC Remediation (`channel-voc-demo`)
* **Context**: Unstructured customer support logs (VOC) required automated root-cause detection and real-time issue remediation without LLM hallucination risks.
* **Action**: Developed a personal project ingesting support conversations into a Neo4j Knowledge Graph utilizing a 3-way hybrid GraphRAG engine (RRF). Integrated LangGraph `interrupt()` human approval gates to auto-trigger GitHub Issues and Jira tickets.
* **Outcome**: Successfully automated root-cause analysis, revenue loss estimation, and ticket dispatch with human-in-the-loop safety.

### 4. High-Throughput Financial Data Scraping Optimization (1M+ Daily Transactions)
* **Context**: High-concurrency write transaction spikes caused connection exhaustion and database lock contention across 10+ scraping nodes.
* **Action**: Conducted Root Cause Analysis (RCA), optimized HikariCP pool parameters, redesigned RDB indexes, and refactored single queries into Bulk Insert/Batch Update operations.
* **Outcome**: Dramatically reduced query latency and maintained a 99.9% scraping success rate across 100–200 financial target institutions.

---

## Career History

* **Full-Stack Developer — Global Content Platform Development & Operations** | Acrofuture Co., Ltd., Hyundai AutoEver partner (*Jun 2025 – Present*)
  * **Global Content Platform**: Built a lightweight integrated monitoring CLI/dashboard using local kubectl/AWS credentials to trace ElastiCache, Pods, AMQ, and logs across 5 global regions (NA, EU, APAC, Japan, LATAM), drastically cutting incident detection lead time. Extended data pipelines for Latin America and Japan markets.
  * **Semiconductor Chip Test Admin (Lead Backend)**: Integrated heterogeneous test hardware signals via custom Jenkins pipelines instead of building a custom engine, securing initial stability. Implemented concurrency control for Lot/Chip mapping (cutting cycle time by 50%) and engineered SSE unidirectional streaming with Reconnection ID recovery (0% data loss).
  * **Automotive External Enterprise Admin Dashboard (PM & Lead Backend)**: Spearheaded an interactive API sandbox allowing external partners to test REST APIs with live variables. Standardized APIs with OpenAPI Specification (OAS) and designed encrypted API Key issuance, AuthN/AuthZ, and Rate Limiting architecture for enterprise traffic stability.
* **Backend Developer** | Infotech Corporation Co., Ltd. (Data Scraping Specialist) (*Aug 2020 – May 2023*)

---

## Education & Certifications

* **Hongik University**: Bachelor of Business Administration (BBA)
* **AWS Certified Solutions Architect – Associate (SAA)**: Amazon Web Services

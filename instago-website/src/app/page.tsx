'use client'

import { motion } from 'framer-motion'
import { 
  Camera, 
  Brain, 
  Zap, 
  BookOpen, 
  Search, 
  ArrowRight,
  CheckCircle,
  Download,
  MessageCircle,
  Play,
  Star
} from 'lucide-react'
import FeatureCard from '@/components/FeatureCard'
import WorkflowSection from '@/components/WorkflowSection'
import AdvancedFeatures from '@/components/AdvancedFeatures'
import MobileMenu from '@/components/MobileMenu'

export default function Home() {
  const coreValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "截图即任务",
      description: "解放用户从截图到下一步行动的思考链路",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "截图即信息", 
      description: "帮助用户规整化地保存截图内容",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "截图即场景",
      description: "从截图中为用户提供场景化的相关知识和帮助",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "截图无干扰",
      description: "截图后用户可不受干扰地继续工作，等待AI给出辅助结果",
      color: "from-blue-400 to-indigo-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 backdrop-blur-sm bg-white/70 border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">InstaGo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-800 transition-colors">功能</a>
            <a href="#workflow" className="text-slate-600 hover:text-slate-800 transition-colors">工作流</a>
            <a href="#scenarios" className="text-slate-600 hover:text-slate-800 transition-colors">场景</a>
            <a href="#download" className="text-slate-600 hover:text-slate-800 transition-colors">下载</a>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Mac 原生应用</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                让截图不再
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  打断你的心流
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                InstaGo 可以无缝将您的截图转换为可进行下一步行动的信息。
                无论是OCR识别，还是智能分析，都让截图真正为你服务。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  立即下载
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold text-lg hover:border-slate-400 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  观看演示
                </motion.button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600">完全免费</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600">隐私保护</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600">原生体验</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Camera className="w-12 h-12 text-blue-500 animate-float" />
                    </div>
                    <div className="h-4 bg-slate-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Brain className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="features" className="px-6 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              四大核心价值
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              重新定义截图的价值，让每一次截图都成为生产力的提升
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                color={item.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <div id="workflow">
        <WorkflowSection />
      </div>

      {/* Advanced Features */}
      <AdvancedFeatures />

      {/* Target Users */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              为知识工作者而生
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              专为习惯使用截图收集灵感、思路、数据来源的专业人士设计
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "知识工作者",
              "研究人员", 
              "设计师",
              "开发者"
            ].map((user, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 text-center border border-slate-200/50 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{user}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="scenarios" className="px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              使用场景
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              从学术研究到日常工作，InstaGo 都能提供智能助手服务
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "协助撰写文档",
                description: "截图学术资料或参考文献，AI自动提取关键信息，生成引用格式，提供相关背景知识",
                icon: <BookOpen className="w-6 h-6" />,
                example: "@ 两天前的一张关于Agent框架最佳实践的推文"
              },
              {
                title: "协助学术研究", 
                description: "截图论文片段或数据图表，AI分析内容并提供深度解读，寻找相关研究方向",
                icon: <Search className="w-6 h-6" />,
                example: "自动识别论文中的关键概念，提供相关研究方向建议"
              },
              {
                title: "协助Debug调试",
                description: "截图错误信息或代码片段，AI快速定位问题，提供解决方案和最佳实践建议",
                icon: <Brain className="w-6 h-6" />,
                example: "分析错误堆栈，提供具体的修复步骤和代码示例"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{useCase.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">{useCase.description}</p>
                <div className="bg-slate-50 rounded-lg p-3 border-l-4 border-blue-500">
                  <p className="text-sm text-slate-500 italic">{useCase.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              开始使用 InstaGo
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              macOS 原生应用，简单安装，即刻体验智能截图的强大功能
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                下载 InstaGo
                <span className="ml-2 text-sm opacity-80">macOS</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold text-lg hover:border-slate-400 transition-all duration-300 flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                联系我们
              </motion.button>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">系统要求</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
                <div>
                  <span className="font-medium">系统版本：</span>macOS 12.0+
                </div>
                <div>
                  <span className="font-medium">处理器：</span>Intel 或 Apple Silicon
                </div>
                <div>
                  <span className="font-medium">存储空间：</span>50MB
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InstaGo</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                让截图真正为你服务，将每一次截图转换为生产力提升的机会。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">功能特性</a></li>
                <li><a href="#workflow" className="hover:text-white transition-colors">工作流程</a></li>
                <li><a href="#scenarios" className="hover:text-white transition-colors">使用场景</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">用户指南</a></li>
                <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
                <li><a href="#" className="hover:text-white transition-colors">反馈建议</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">© 2024 InstaGo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

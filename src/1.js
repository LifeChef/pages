import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Users, Bell, Settings, BarChart } from 'lucide-react';

const EnhancedPatientExperience = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Intelligent Patient-First Platform
        </h2>
        <p className="text-lg text-gray-700 mb-4">Personalized Nutrition Journey Powered by SmartBite Technology</p>
        <div className="p-4 bg-blue-50 rounded-lg mb-6">
          <p className="text-gray-700">
            Our platform combines advanced meal planning intelligence with seamless patient experience. 
            Through SmartBite's sophisticated algorithm and intuitive controls, we deliver personalized nutrition 
            solutions that adapt to each patient's needs and preferences while maintaining the highest dietary standards.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* SmartBite System */}
        <Card className="p-6 bg-white shadow-lg">
          <div className="flex items-center mb-4">
            <Brain className="w-8 h-8 text-blue-500 mr-3" />
            <h3 className="text-xl font-bold">SmartBite Intelligence</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Advanced Meal Generation</h4>
              <p className="text-gray-700 mb-3">
                Developed under strict dietician guidance, SmartBite generates optimal meal combinations that 
                consider taste, variety, and nutritional requirements. The system intelligently adapts to 
                allergen exclusions while maintaining program compliance and meal diversity.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  Features: Patient history analysis, allergen-aware regeneration, taste variety optimization
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Dynamic Meal Planning</h4>
              <p className="text-gray-700 mb-3">
                SmartBite tracks each patient's order history to ensure meal variety and prevent repetition, 
                creating a diverse and engaging nutritional experience while respecting dietary requirements.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  Benefit: Personalized meal diversity with consistent nutritional standards
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Patient Control */}
        <Card className="p-6 bg-white shadow-lg">
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 text-purple-500 mr-3" />
            <h3 className="text-xl font-bold">Patient Control Center</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Flexible Plan Management</h4>
              <p className="text-gray-700 mb-3">
                Patients can easily adjust their nutrition journey through intuitive controls:
                switching meal plans, modifying component selections, adjusting meal quantities, 
                and managing delivery schedules including vacation pauses.
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-800">
                  Control: Component swaps, meal quantity adjustments, delivery scheduling
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Preference Management</h4>
              <p className="text-gray-700 mb-3">
                Comprehensive allergen and component management ensures patient safety while 
                maintaining meal enjoyment. The system automatically regenerates appropriate 
                alternatives when exclusions are set.
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-800">
                  Feature: Automatic meal regeneration based on dietary restrictions
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Communication System */}
      <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <h3 className="text-xl font-bold mb-6">Patient Communication</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-4">
              <Bell className="w-6 h-6 text-blue-400 mr-2" />
              <h4 className="font-semibold">Order Management Updates</h4>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Timely notifications for approaching order deadlines and delivery updates ensure 
              patients can manage their meal plans effectively. Clear communication keeps patients 
              informed throughout their nutrition journey.
            </p>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-sm">
                System: Email and SMS notifications for critical updates
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-green-400 mr-2" />
              <h4 className="font-semibold">Patient Engagement</h4>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Regular updates about upcoming deliveries, order confirmations, and delivery 
              status keep patients connected to their nutrition program.
            </p>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-sm">
                Focus: Clear, timely communication throughout the service journey
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EnhancedPatientExperience;